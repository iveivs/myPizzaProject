export const ADD_USER = 'ADD_USER'

export const addUser = (login, password, wasLogout) => (
    {
        type: ADD_USER,
        payload: {login, password, wasLogout}
    }
)