import {
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
} from '@constants/actions';

const initialState = {
  token: null,
};

export default function (state = initialState, action = {}) {
  const { type, data } = action;

  switch (type) {

    case LOGIN_USER_SUCCESS:
      console.log(data.token)
      return {
        ...state,
        token: data.token
      }

    case LOGIN_USER_FAIL:
      return {
        ...state,
        token: null
      }

    default:
      return state;
  }
}
