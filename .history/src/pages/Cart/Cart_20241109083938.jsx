import { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectProductOrder } from "../../selectors/select-product-order";
import { removeProductFromCart } from "../../actions/remove-product-from-cart";

export const Cart = () => {
    const currentOrder = useSelector(selectProductOrder);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(removeProductFromCart(id));
    };

    return (
        <div className="container indent">
            <h1 className={styles.cart_title}>Your order:</h1>
            .
        </div>
    );
};
