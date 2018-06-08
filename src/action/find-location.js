import superagent from 'superagent';

export const addLocation = searchResults => ({
  type: 'ADD_LOCATION',
  payload: searchResults,
});

export const addLocationAction = search => dispatch => {
  let queryData = {
    zip: search.zip,
    country: search.country,
  };
  return superagent.get(`${process.env.API_URL}/Get-weather`)
    .query(queryData)
    .then(res => {
      return dispatch(addLocation(res.body));
    });
};
