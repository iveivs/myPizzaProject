import { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectProductOrder } from "../../selectors/select-product-order";
import { removeProductFromCart } from "../../actions/remove-product-from-cart";
import { getTotalPrice } from "../../utils/utils";

export const Cart = () => {
    const currentOrder = useSelector(selectProductOrder);
    const dispatch = useDispatch();

    const totalPrice = getTotalPrice(currentOrder)
    console.log('totalPrice', totalPrice);
    const handleDelete = (id) => {
        dispatch(removeProductFromCart(id));
    };

    return (
        <div className="container indent">
            <h1 className={styles.cart_title}>Your order:</h1>
            <div className={styles.wrapper}>
                <div className={styles.items_wrapper}>
                    {currentOrder.length ? (
                        currentOrder.map((order, i) => (
                            <div key={i} className={styles.cart_item}>
                                <img
                                    className={styles.cart_img}
                                    src={order.src}
                                    alt=""
                                />
                                <h3>{order.name}</h3>
                                <p>{order.description}</p>
                                <p>Amount: {order.amount}</p>
                                <div
                                    className={`${styles.modif_btn} button`}
                                    onClick={() => handleDelete(order.id)}
                                >
                                    Delete
                                </div>
                            </div>
                        ))
                    ) : (
                        <>Your cart is empty</>
                    )}
                </div>
                <div className={styles.total_orderinfo}>
                    <p>total price</p>
                </div>
            </div>
        </div>
    );
};
