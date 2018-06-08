
import './content.scss';
import React from 'react';
import {connect} from 'react-redux';
import { renderIf } from '../../lib/utils';
import Weather from '../weather-item/index';
import GetLocation from '../get-location/index';
import * as locationActions from  '../../action/find-location';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
    this.handleError = this.handleError.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({
      error: false,
    });
  }

  handleError() {
    this.setState({
      error: true,
    });
  }

  render() {
    return (
      <div className="main">
        <header>Enter your Zip here to be Zipped away!</header>

        <div className="name-search">
          <div className={this.props.location.length === 1 ? 'input-area' : 'start-area'}>
            <GetLocation
              wrongZip={this.handleError}
            />
          </div>

          {renderIf(this.state.error,
            <h1 className="location-name">That Zip Code does not Exist</h1>
          )}

          <div className="location">
            {this.props.location.length === 1 && !this.state.error ?
              <h1 className="location-name">{this.props.location[0].weather.name}</h1>
              :
              undefined
            }
          </div>
        </div>

        {renderIf(this.props.location.length && !this.state.error,
          <div className="days">
            {this.props.location.length === 1 ?
              this.props.location.map((item, idx) =>
                <React.Fragment key={idx}>
                  <Weather
                    weatherItem={item}
                  />
                </React.Fragment>)
              :
              undefined
            }
          </div>
        )}
      </div>
    );
  }
}

let mapStateToProps = state => ({
  location: state.location,
});

export default connect(mapStateToProps, null)(Content);
