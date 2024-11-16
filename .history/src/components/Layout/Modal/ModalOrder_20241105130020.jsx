import styles from "./ModalOrder.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../actions/close-modal";
import { useEffect, useState } from "react";
import axios from "axios";

export const ModalOrder = ({ currentOpenModalWindow }) => {
    const [product, setProduct] = useState(null); // Инициализация как null
    const [loading, setLoading] = useState(true);
    const [amount, setAmount] = useS
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentOpenModalWindow) {
            setLoading(true);
            axios
                .get(`http://localhost:3002/products/${currentOpenModalWindow}`)
                .then((response) => {
                    setProduct(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    setLoading(false);
                });
        }
    }, [currentOpenModalWindow]);

    const handleCloseModal = (e) => {
        if (e.target.getAttribute("data-close")) {
            dispatch(closeModal());
        }
    };

    return (
        <div
            className={styles.overlay}
            onClick={handleCloseModal}
            data-close="close"
        >
            <div className={styles.wrapper}>
                {loading ? (
                    <p>Loading...</p>
                ) : product ? (
                    <div className={styles.item}>
                        <img
                            className={styles.img}
                            src={product.src}
                            alt="pizza"
                        />
                        <div className={styles.info}>
                            <h2 className={styles.title}>{product.name}</h2>
                            <p className={styles.description}>
                                {product.description}
                            </p>
                            <p className={styles.price}>
                                Price: {product.price} ₽
                            </p>
                            <div className="amount">
                                <p>-</p>
                                <p>+</p>
                            </div>
                            <div className="button">ADD TO CART</div>
                        </div>
                    </div>
                ) : (
                    <p>Product not found</p>
                )}
            </div>
        </div>
    );
};
