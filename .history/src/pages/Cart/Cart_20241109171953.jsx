import { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectProductOrder } from "../../selectors/select-product-order";
import { removeProductFromCart } from "../../actions/remove-product-from-cart";
import { getTotalPrice } from "../../utils/utils";

export const Cart = () => {
    const currentOrder = useSelector(selectProductOrder);
    const dispatch = useDispatch();

    const totalPrice = getTotalPrice(currentOrder);
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
                                    alt="pizza image"
                                />
                                <div className={styles.cart_item_info}>
                                    <h3>{order.name}</h3>
                                    <p>{order.description}</p>
                                    
                                    <p>Amount: {order.amount}</p>
                                    <p>Price: {order.price}</p>
                                    <div
                                        className={`${styles.modif_btn} button`}
                                        onClick={() => handleDelete(order.id)}
                                    >
                                        <i
                                            className="fa fa-trash-o"
                                            aria-hidden="true"
                                        ></i>
                                        Delete
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <>Your cart is empty</>
                    )}
                </div>
                <div className={styles.total_orderinfo}>
                    {currentOrder.length ? (
                        <h2>total price: {totalPrice} ₽</h2>
                    ) : (
                        <h2>total price: 0 ₽</h2>
                    )}
                </div>
            </div>
        </div>
    );
};
