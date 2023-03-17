const reducerName = 'ads';
const createActionName = name => `app/${reducerName}/${name}`;

const initialState = {
  data: [],
  requests: {},
};

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}