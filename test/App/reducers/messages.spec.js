/* eslint-env mocha */
import { expect } from 'chai';
import messages from '../../../src/App/reducers/messages';
import * as types from '../../../src/App/constants/ActionTypes';

describe('Messages reducer', () => {
  it('should return the initial state, empty', () => {
    expect(messages(undefined, {})).to.deep.equal([]);
  });

  it('should handle ADD_MESSAGE and store every message', () => {
    expect(messages([], {
      type: types.ADD_MESSAGE,
      message: 'Hey',
      author: 'ForlornHope',
      id: 0
    })).to.deep.equal([
      {
        message: 'Hey',
        author: 'ForlornHope',
        id: 0
      }
    ]);

    expect(messages(
      [
        {
          message: 'Hey',
          author: 'ForlornHope',
          id: 0
        }
      ],
      {
        type: types.ADD_MESSAGE,
        message: 'Yo',
        author: 'RebJeppson',
        id: 1
      }
    )).to.deep.equal([
      {
        message: 'Hey',
        author: 'ForlornHope',
        id: 0
      },
      {
        message: 'Yo',
        author: 'RebJeppson',
        id: 1
      }
    ]);
  });
});
