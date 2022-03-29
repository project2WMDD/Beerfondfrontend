import React, { useState, useReducer, useContext } from 'react';
import axios from 'axios';
import reducer from './reducer';
import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from './actions';
import { apiAuth } from '../constants';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

const initialState = {
  isLoading: false,
  user: user ? JSON.parse(user) : null,
  token: token,
};

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setUserInLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  };

  const removeUserInLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const createUser = async (userParams) => {
    dispatch({ type: CREATE_USER });
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/${apiAuth}/create`,
        userParams
      );
      console.log('result: ', result);
      const { user, token } = result.data;

      dispatch({ type: CREATE_USER_SUCCESS, payload: { user, token } });
      // save user to localStorage
      setUserInLocalStorage({ user, token });
    } catch (error) {
      dispatch({ type: CREATE_USER_ERROR, payload: error.response });
    }
    console.log(userParams);
  };

  const loginUser = async (userParams) => {
    dispatch({ type: LOGIN_USER });
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/${apiAuth}/login`,
        userParams
      );
      console.log('result: ', result);
      const { user, token } = result.data;

      dispatch({ type: LOGIN_USER_SUCCESS, payload: { user, token } });
      // save user to localStorage
      setUserInLocalStorage({ user, token });
    } catch (error) {
      dispatch({ type: LOGIN_USER_ERROR, payload: error.response });
    }
    console.log(userParams);
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER, payload: { user: null, token: null } });
    removeUserInLocalStorage();
  };

  return (
    <GlobalContext.Provider
      value={{ ...state, createUser, loginUser, logoutUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, initialState, useGlobalContext };
