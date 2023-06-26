import { GET_CHAR, ADD_CHAR } from "./action_types";
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
      console.log(error);
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
