import { ADD_USER } from "../actions/add-user";

const initialState = {
    currentUser: {}, 
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return return action.payload;
        default:
            return state;
    }
};

export default userReducer;
