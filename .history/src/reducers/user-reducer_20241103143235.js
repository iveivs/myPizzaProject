import { ADD_USER } from "../actions/add-user";

const initialState = {
    currentUser: {}, 
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                currentUser: action.payload // Просто устанавливаем action.payload как объект текущего пользователя
            };
        default:
            return state;
    }
};

export default userReducer;
