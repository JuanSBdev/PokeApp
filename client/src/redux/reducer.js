import { GET_CHAR, ADD_CHAR, DEL_CHAR } from "./action_types"

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
        default:
            return {...state}
    }
}
export default reducer;