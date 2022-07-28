import axios from 'axios';
export const RESULT_TEXT = 'RESULT_TEXT';
const url = `https://copywrit.herokuapp.com`

export function dispatchText(data) {
    return { type: RESULT_TEXT, payload: data };
  };
  
  export function resultText(text) {
    return function (dispatch) {
    
     
      return axios.get(`${url}/iecho?text=${text}`).then(({ data }) => {
        dispatch(dispatchText(data));
      })
    };
  };