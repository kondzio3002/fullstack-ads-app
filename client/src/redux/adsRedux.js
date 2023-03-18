import axios from 'axios';
import { API_URL } from '../config';
import { endRequest, errorRequest, startRequest } from './requestRedux';

export const getAds = state => state.ads;
export const getAdById = (state, id) => state.ads.find(ad => ad._id === id);

const reducerName = 'ads';
const createActionName = name => `app/${reducerName}/${name}`;

const LOAD_ADS = createActionName('LOAD_ADS');

export const loadAds = payload => ({ payload, type: LOAD_ADS });

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

const adsReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOAD_ADS:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default adsReducer;