import styles from './Cart.module.css'
import { useSelector } from 'react-redux'
import { selectProductOrder } from '../../selectors/select-product-order'
import { useEffect } from 'react'


export const Cart = () => {
    const currentOrder = useSelector(selectProductOrder)
    // const []
    console.log('currentOrder', currentOrder);
    
    useEffect(() => {
        currentOrder
    })
    
    return (
        <div className="container indent">
            <h1 className={styles.cart_title}>Yours order</h1>
            { currentOrder ? (
                currentOrder.map((order, i)=> (
                    <div key={i} className={styles.cart_item}>
                        <img className={styles.cart_img} src={order.src} alt="" />
                        <h3>{order.name}</h3>
                        <p>{order.description}</p>
                        <p>amount: {order.amount}</p>
                        <div></div>
                </div>
                ))
            ) : (<>Text2</>)}
            
        </div>
    )
}