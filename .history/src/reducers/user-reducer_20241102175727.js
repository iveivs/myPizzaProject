import { ADD_USER } from "../actions/add-user"

// const initialUserState = {
//     login: null,
//     password: null,
// }
const initialState = {
    users: [], 
};

export const userReducer = (state = initialUserState, action) => {
    console.log('USER WAS ADDED');
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
            default:
                return state
    }
}

export default userReducer;