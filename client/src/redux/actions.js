import { GET_CHAR, ADD_CHAR, DEL_CHAR } from "./action_types";
import axios from "axios";

export const getCharacters = () => {
  
  return async (dispatch) => {
    const endpoint = 'http://localhost:3001/myPokes';
    try {
      const response = await axios(endpoint);
      const data = response.data;
      dispatch({
        type: GET_CHAR,
        payload: data
      });
    } catch (error) {
      console.log("Error:", error + error.message);
    }
  };
};

export const addCharacter = (id) => {
    return async (dispatch) => {
      const endpoint = `http://localhost:3001/poke/${id}`;
      try {
        const response = await axios(endpoint);
        const data = response.data;
        dispatch({
          type: ADD_CHAR,
          payload: data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  };

  export const deleteCharacter = (id) => {
    const endpoint = `http://localhost:3001/poke/${id}`
    return async (dispatch) =>{
      try {
        await axios.delete(endpoint)
        return dispatch({
          type: DEL_CHAR,
          payload: id,
    });
      } catch (error) {
        console.log(error)
      }

    }
  }
