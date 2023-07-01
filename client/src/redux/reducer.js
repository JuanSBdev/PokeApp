import { GET_CHAR, ADD_CHAR, DEL_CHAR, ADD_FAV, CREATE_CHAR } from "./action_types"

const initialState = {
    characters:[],
    myFavorites:[],
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
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
        case ADD_FAV:
            return{
                ...state,
                myFavorites:[...state.myFavorites, action.payload]
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