import styles from "./ModalOrder.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../actions/close-modal";

export const ModalOrder = ({currentOpenModalWindow}) => {
    const dispatch = useDispatch()

    

    const handleCloseModal = (e) => {
        if(e.target.getAttribute("data-close")) {
            console.log('Im here');
            dispatch(closeModal())
        }
    }
    return (
        <div className={styles.overlay} onClick={handleCloseModal} data-close="close">
            <div className={styles.wrapper}>
                <h3>Modal</h3>
                <p>{currentOpenModalWindow}</p>
            </div>
        </div>
    );
};
