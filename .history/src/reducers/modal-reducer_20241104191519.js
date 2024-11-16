import { OPEN_MODAL } from "../actions/open-modal"
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

    }
}