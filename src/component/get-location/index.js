import React from 'react';
import './input-area.scss';
import {connect} from 'react-redux';
import * as locationActions from  '../../action/find-location';

class GetLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      country: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState({[name]: value});
  };

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.zip === '') {
      alert('need to have zip to search');
      return;
    }
    this.props.addLocation(this.state)
      .then(() => this.setState({
        zip: '',
        country: '',
      }))
      .catch(error => {
        this.props.wrongZip();
        this.setState({
          zip: '',
          country: '',
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <form
          className="input-zip"
          onSubmit={this.handleSubmit}
          noValidate>

          <input
            type="text"
            pattern="[0-9]{1,5}" required
            name="zip"
            placeholder="zip"
            value={this.state.zip}
            onChange={this.handleChange}/>

          <input
            type="text"
            maxLength="2"
            autoComplete="off"
            name="country"
            placeholder="Country code"
            value={this.state.country}
            onChange={this.handleChange}/>

          <button className={this.props.location.length === 1 ? 'go-btn' : 'go-btn-before'}type="submit">Get Weather</button>
        </form>
      </React.Fragment>
    );
  }
}

let mapStateToProps = state => ({
  location: state.location,
});

const mapDispatchToProps = dispatch => ({
  addLocation : search => dispatch(locationActions.addLocationAction(search)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GetLocation);
