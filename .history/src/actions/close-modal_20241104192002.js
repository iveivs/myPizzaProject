export const CLOSE_MODAL = 'CLOSE_MODAL'

export const openModal = (modalParams) => ({
    type: OPEN_MODAL,
    payload: modalParams,
})