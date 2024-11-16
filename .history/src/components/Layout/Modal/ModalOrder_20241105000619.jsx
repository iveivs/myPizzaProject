import styles from "./ModalOrder.module.css";
import { useDispatch, useSelector } from "react-redux";
imp

export const ModalOrder = () => {
    return (
        <div className={styles.overlay}>
            <div className={styles.wrapper}>
                <h3>Modal</h3>
            </div>
        </div>
    );
};
