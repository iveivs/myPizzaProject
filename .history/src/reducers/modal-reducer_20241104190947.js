const initialAppState = {
    wasLogout: false,
    modal: {
        isOpen: false,
        text: '',
        onConfirm: () => {},
        onCancel:() => {},
    }
}

export const modalReducer = (st)