import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  
  // action.payload.data
  switch(action.type){
    case(FETCH_WEATHER):
      // Multiple cities (action.payload.data) === array
      // return state.concat([action.payload.data]);
      
      return [ action.payload.data, ...state ]; /// [city, city, city] NOT [city [city, city]]
  }
  return state;
}