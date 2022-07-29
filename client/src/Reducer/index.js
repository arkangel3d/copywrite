import { RESULT_TEXT, RESULT_ERROR } from '../Actions/index';
const initialState = {
    text:[],
    error:null
};
export default function rootReducer(state = initialState, action) {
  
    if (action.type === RESULT_TEXT) {
      return {
         text: [...state.text, action.payload],
      }
    }
    if (action.type === RESULT_ERROR) {
      return {
        ...state,
         error: action.payload,
      }
    }
    return state;
}