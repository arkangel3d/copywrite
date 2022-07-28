import { RESULT_TEXT } from '../Actions/index';
const initialState = {
    text:[]
};
export default function rootReducer(state = initialState, action) {
  
    if (action.type === RESULT_TEXT) {
      return {
         text: [...state.text, action.payload],
      };
    }
    return state;
}