import { GET_CHAR, ADD_CHAR, DEL_CHAR, CREATE_CHAR, GET_TYPES } from "./action_types"

const initialState = {
    characters:[],
    tipos:[],
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TYPES:
            return{
                ...state,
                tipos: action.payload
            }

        case GET_CHAR:
            return {
                ...state,
                characters: action.payload
            }
        case ADD_CHAR:
            return {
                ...state,
                characters: [...state.characters, action.payload]
            }
        case DEL_CHAR:
            let updatedCharacters = state.characters.filter(ch => ch.id !== Number(action.payload))
            return{
                ...state,
                characters: updatedCharacters
            }
        
        case CREATE_CHAR:
            return {
                ...state,
                characters: [...state.characters, action.payload]
            }

        default:
            return {...state}
    }
}
export default reducer;