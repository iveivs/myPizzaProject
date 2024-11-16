import { ADD_USER } from "../actions/add-user";

const initialState = {
    login: "", 
    password: "",
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            console.log();
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;
