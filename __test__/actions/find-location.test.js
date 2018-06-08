import * as locationAction from '../../src/action/find-location';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
require('jest');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('find-location action', () => {
  describe('addLocation action', () => {
    it('should build a action with the data sent in.', () => {
      let testData = locationAction.addLocation('seattle');
      expect(testData.payload).toBe('seattle');
      expect(testData.type).toBe('ADD_LOCATION');
    });
  });
  describe('addLocation action', () => {
    it('should build a action with the data sent in.', () => {
      const store = mockStore();
      return store.dispatch(locationAction.addLocationAction({zip: 98109}))
        .then(() => {
          const actions = store.getActions();
          expect(actions[0].type).toEqual('ADD_LOCATION');
        });
    });
  });
});
