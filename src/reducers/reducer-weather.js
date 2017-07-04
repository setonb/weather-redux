import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
      case FETCH_WEATHER:
      // important to not manipulate or mutate state
      // So, instead of state.push([action.payload.data])
      // We use state.concat([action.payload.data])
      // which is identical to the es6 spread form below.
        return [ action.payload.data, ...state ];
  }

  return state;
}
