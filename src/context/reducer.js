import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from './actions';

const reducer = (state, action) => {
  if (action.type === CREATE_USER) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
    };
  }
  if (action.type === CREATE_USER_ERROR) {
    return { ...state, isLoading: false, errorMsg: action.payload };
  }

  if (action.type === LOGIN_USER) {
    return { ...state, isLoading: true };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return { ...state, isLoading: false, errorMsg: action.payload };
  }
  if (action.type === LOGOUT_USER) {
    console.log(action, state)
    return { ...state, token: action.payload.token, user: action.payload.user };
  }
};

export default reducer;
