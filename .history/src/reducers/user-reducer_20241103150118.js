import { ADD_USER } from "../actions/add-user";

const initialState = {
    login: null, 
    password: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            console.log('STATE', action.payload);
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;
