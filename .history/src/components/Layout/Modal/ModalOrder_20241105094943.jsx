import styles from "./ModalOrder.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../actions/close-modal";

export const ModalOrder = () => {
    const dispatch = useDispatch()

    const handleCloseModal = (e) => {
        // const nearestElement = e.target.closest("[data-id]");
        
        console.log(e.target);
        // dispatch(closeModal())
    }
    return (
        <div className={styles.overlay} onClick={handleCloseModal} data-close="close">
            <div className={styles.wrapper}>
                <h3>Modal</h3>
            </div>
        </div>
    );
};
