import * as locationAction from '../../src/action/find-location';
require('jest');


describe('find-location action', () => {
  describe('addLocation action', () => {
    it('should build a action with the data sent in.', () => {
      let testData = locationAction.addLocation('seattle');
      expect(testData.payload).toBe('seattle');
      expect(testData.type).toBe('ADD_LOCATION');
    });
  });
});
