/* eslint-env mocha */
import { expect } from 'chai';
import users from '../../../src/App/reducers/users';
import * as types from '../../../src/App/constants/ActionTypes';

describe('Users reducer', () => {
  it('should return the initial state, empty', () => {
    expect(users(undefined, {})).to.deep.equal([]);
  });

  it('should handle ADD_USER and store every user', () => {
    expect(users([], {
      type: types.ADD_USER,
      name: 'ForlornHope',
      id: 0
    })).to.deep.equal([
      {
        name: 'ForlornHope',
        id: 0
      }
    ]);

    expect(users(
      [
        {
          name: 'RebJeppson',
          id: 1
        }
      ],
      {
        type: types.ADD_USER,
        name: 'ForlornHope',
        id: 0
      }
    )).to.deep.equal([
      {
        name: 'RebJeppson',
        id: 1
      },
      {
        name: 'ForlornHope',
        id: 0
      }
    ]);
  });
});
