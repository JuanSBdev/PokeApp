import { ADD_CHAR} from "./action_types"

const initialState = {
    characters:[],
    myFavorites:[],
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAR:
            return {
                ...state,
                characters: [...state.characters, action.payload]
            }
        default:
            return {...state}
    }
}
export default reducer;