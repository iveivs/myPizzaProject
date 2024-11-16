import { ADD_USER } from "../actions/add-user";
imp

const initialState = {
    login: null, 
    password: null,
    wasLogout: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;
