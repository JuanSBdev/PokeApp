import { ADD_FAV, REMOVE_FAV, GET_FAV, ADD_CHAR, DEL_CHAR } from "./action_types";
import axios from "axios";

export const getCharacters = async (id)=>{
    const endpoint = 'http://localhost:3001/myPokes'
    try {
        const response = await axios(endpoint)
        const data =  response.data;
        return dispatch({
            type: ADD_CHAR,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
    
}

