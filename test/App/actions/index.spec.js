/* eslint-env mocha */
import { expect } from 'chai';
import { addMessage, addUser } from '../../../src/App/actions/index';
import * as types from '../../../src/App/constants/ActionTypes';

describe('actions', () => {
  context('when adding a message', () => {
    it('should create an action to add a message with id 0', () => {
      const message = 'Something';
      const expected = {
        type: types.ADD_MESSAGE,
        message,
        author: 'Me',
        id: 0
      };

      expect(addMessage(message, 'Me')).to.deep.equal(expected);
    });
  });

  context('when adding a second message', () => {
    it('should create an action to add a message with id 1', () => {
      const message = 'Something Else';
      const expected = {
        type: types.ADD_MESSAGE,
        message,
        author: 'You',
        id: 1
      };

      expect(addMessage(message, 'You')).to.deep.equal(expected);
    });
  });
});

context('when adding a user', () => {
  it('should create an action to add a user with id 0', () => {
    const user = 'ForlornHope';
    const expected = {
      type: types.ADD_USER,
      name: user,
      id: 0
    };

    expect(addUser(user)).to.deep.equal(expected);
  });

  context('when adding a second user', () => {
    it('should create an action to add a user with id 1', () => {
      const user = 'RebJeppson';
      const expected = {
        type: types.ADD_USER,
        name: user,
        id: 1
      };

      expect(addUser(user)).to.deep.equal(expected);
    });
  });
});
