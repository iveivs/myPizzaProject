import { ADD_USER } from "../actions/add-user"

const initialState = {
    users: [], 
};

const userReducer = (state = initialState, action) => {
    console.log('USER WAS ADDED', action);
    console.log('STATE', state);
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