import axios from 'axios';
import { API_URL } from '../config';
import shortid from 'shortid';

export const getAds = ({ data }) => data.ads;
export const getAdById = ({data}, id) => data.ads.find(ad => ad._id === id);

export const getRequest = ({ data }) => data.request;

export const getUser = ({ data }) => data.user;
export const getUserId = ({ data }) => data.userData;

const createActionName = name => `app/data/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_ADS = createActionName('LOAD_ADS');
const ADD_AD = createActionName('ADD_AD');
const SEARCH_ADS = createActionName('SEARCH_ADS');

const LOG_IN = createActionName('LOG_IN');
const LOG_OUT = createActionName('LOG_OUT');

const USER_DATA = createActionName('USER_DATA');

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

export const loadAds = payload => ({ payload, type: LOAD_ADS });
export const addAd = payload => ({ payload, type: ADD_AD });
export const searchAd = payload => ({ payload, type: SEARCH_ADS });

export const logIn = payload => ({ payload, type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });

export const userData = payload => ({ payload, type: USER_DATA });

export const loadAdsRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/ads`);
      dispatch(loadAds(res.data));
      dispatch(endRequest());
    } catch (error) {
      dispatch(errorRequest(error.message));
    }
  };
};

const initialState = {
  ads: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
  user: null,
  userData: null
};

const dataReducer = (statePart = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_ADS:
      return { ...statePart, ads: [ ...action.payload ] };
    case ADD_AD:
      return { ...statePart, ads: { ...action.payload, _id: shortid() }};
    case SEARCH_ADS:
      return statePart.ads.filter(ad => ad.title.includes(action.payload));
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: false } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };
    case LOG_IN:
      return { ...statePart, user: { ...action.payload }};
    case LOG_OUT:
      return { ...statePart, user: null };
    case USER_DATA:
      return { ...statePart, userData: { ...action.payload } };
    default:
      return statePart;
  }
};

export default dataReducer;