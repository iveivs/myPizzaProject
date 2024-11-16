import styles from "./ModalOrder.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../actions/close-modal";

export const ModalOrder = () => {
    
    const handleCloseModal = () => {

    }
    return (
        <div className={styles.overlay} onClick={handleCloseModal}>
            <div className={styles.wrapper}>
                <h3>Modal</h3>
            </div>
        </div>
    );
};
