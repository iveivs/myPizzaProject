import styles from './Cart.module.css'
import { useSelector } from 'react-redux'
import { selectProductOrder } from '../../selectors/select-product-order'

export const Cart = () => {
    const currentOrder = useSelector(selectProductOrder)
    console.log('currentOrder', currentOrder);
    const getOrderFromServerToCart = fe
    return (
        <div className="container indent">
            <h1>Cart</h1>
            { currentOrder ? (
                currentOrder.map((order, i)=> (
                    <div key={i} className={styles.cart_item}>
                    {order.login}
                </div>
                ))
            ) : (<>Text2</>)}
            
        </div>
    )
}