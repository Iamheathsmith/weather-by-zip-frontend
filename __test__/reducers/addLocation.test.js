import locationReducer from '../../src/reducer/addLocation';
require('jest');

describe('addLocation Reducer', () => {
  describe('Case ADD_LOCATION', () => {
    it('should add the location to the state', () => {
      let action = {
        type: 'ADD_LOCATION',
        payload: {city: 'seattle'},
      };
      let state = [];
      let testData = locationReducer(state, action);
      expect(testData[0].city).toBe('seattle');
    });
  });
  describe('Case ADD_LOCATION', () => {
    it('should add the location and remove the old one', () => {
      let action = {
        type: 'ADD_LOCATION',
        payload: {city: 'portland'},
      };
      let state = [{city: 'seattle'}];
      expect(state[0].city).toBe('seattle');
      let testData = locationReducer(state, action);
      expect(testData[0].city).toBe('portland');
    });
  });
  describe('default', () => {
    it('should return default state if action type case not found', () => {
      let action = {
        type: 'TEST',
        payload: {city: 'portland'},
      };
      let state = [{city: 'seattle'}];
      let testData = locationReducer(state, action);
      expect(testData[0].city).toBe('seattle');
    });
  });
});
