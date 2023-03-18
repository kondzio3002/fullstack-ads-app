export const getRequest = ({ state }) => state.request;

const createActionName = name => `app/ads/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

const requestReducer = (statePart = [], action) => {
  switch(action.type) {
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: false } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };
    default:
      return statePart
  };
};

export default requestReducer;