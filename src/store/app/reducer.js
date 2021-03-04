import {createReducer} from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState = {
  authorized: null
};

const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setAuth, (state, action) => {
      state.authorized = action.payload;
    });
});

export default appReducer;
export {
  initialState
};
