import { OPEN_MODAL } from "../actions/open-modal"
import { CLOSE_MODAL } from "../actions/close-modal"

const initialAppState = {
    modal: {
        isOpen: false,
        // text: '',
        // onConfirm: () => { },
        // onCancel: () => { },
    }
}

const modalReducer = (state = initialAppState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            console.log('I WAS OPENED');
            return {
                ...state,
                modal: {
                    ...state.modal,
                    isOpen: true,
                }
            }
        case CLOSE_MODAL:
            console.log('I WAS OPENED');
            return initialAppState
        default:
            return state;
    }
}

export default modalReducer


