import styles from "./ModalOrder.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../actions/close-modal";
import { useEffect, useState } from "react";
import axios from "axios";
import { addProductToCart } from "../../../actions/add-product-to-cart";

export const ModalOrder = ({ currentOpenModalWindow }) => {
    // const [amountOrderedProducts, setAmountOrderedProducts] = useState(1);
    const [product, setProduct] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [amount, setAmount] = useState(1)
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

    const increaceProductAmount = () => {
        setAmount((prevAmount) => prevAmount + 1)
    }
    const decreaceProductAmount = () => {
        if (amount === 0) {
            return
        }
        setAmount((prevAmount) => prevAmount - 1)
    }

    const addToCart = () => {
        const currentProductInfo = {
            id: product.id,
            amount
        }
        dispatch(addProductToCart())
    }

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
                            <div className={styles.amount}>
                                <p className={styles.decreace} onClick={decreaceProductAmount}>–</p>
                                <p>{amount}</p>
                                <p className={styles.increace} onClick={increaceProductAmount}>+</p>
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
