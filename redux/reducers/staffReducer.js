import { initialState, LOGIN_STAFF } from "../constant";
import { PUNCH_IN } from "../constant";

export const staffReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_STAFF:
      return { ...state, ...payload };

    default:
      return state;
  }
};
