export default (state={}, {type, payload}) => {

  switch (type) {
  case 'ADD_LOCATION':
    return [payload];
  default:
    return state;
  }
};
