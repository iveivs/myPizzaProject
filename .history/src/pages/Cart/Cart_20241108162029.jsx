import styles from './Cart.module.css'
import { useSelector } from 'react-redux'
import { selectProductOrder } from '../../selectors/select-product-order'
import { UseSelector } from 'react-r

export const Cart = () => {
    const currentOrder = useSelector(selectProductOrder)
    console.log('currentOrder', currentOrder);
    // const getOrderFromServerToCart = fetch()
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