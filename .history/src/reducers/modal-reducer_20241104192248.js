import { OPEN_MODAL } from "../actions/open-modal"
import CL
const initialAppState = {
    wasLogout: false,
    modal: {
        isOpen: false,
        text: '',
        onConfirm: () => { },
        onCancel: () => { },
    }
}

export const modalReducer = (state = initialAppState, action) => {
    switch (action.type) {
        case OPEN_MODAL :
            return {
                ...state,
                modal: {
                    ...state.modal,
                    // ...action.payload,
                    isOpen:true,
                }
            }
        case 
    }
}