import styles from "./ModalOrder.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../actions/close-modal";
import { useEffect, useState } from "react";
import axios from "axios";

export const ModalOrder = ({ currentOpenModalWindow }) => {
    const [product, setProduct] = useState(null); // Инициализация как null
    const [loading, setLoading] = useState(true);
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
    }, [currentOpenModalWindow])

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
                <h3>Modal</h3>
                {loading ? (
                    <p>Loading...</p> 
                ) : product ? (
                    <div>
                        <h4 className={styles.title}>{product.name}</h4>
                        <p className={styles.wrapper}>{product.description}</p>
                        <p>Price: {product.price} ₽</p>
                        <img src={product.src} alt="pizza" />
                    </div>
                ) : (
                    <p>Product not found</p>
                )}
            </div>
        </div>
    );
};

