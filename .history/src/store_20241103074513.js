// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import { thunk } from "redux-thunk";
// // import { todosReducer, themeColorReducer } from "./reducers";

// const reducer = combineReducers({
//     todosState: todosReducer,
//     themeColor: themeColorReducer,
// })

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store =  createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
import { combineReducers } from 'redux';
import userReducer from './userReducer';

// Делаем задел для futureReducer, который позже может стать редьюсером для товаров
const rootReducer = combineReducers({
    users: userReducer,
    // products: productReducer (сюда добавим редьюсер для товаров, когда он будет готов)
});

export default rootReducer;