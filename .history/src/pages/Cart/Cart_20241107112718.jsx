import styles from './Cart.module.css'
import { useSelector } from 'react-redux'
import { selectProductOrder } from '../../selectors/select-product-order'

export const Cart = () => {
    const currentOrder = useSelector(selectProductOrder)
    console.log('currentOrder', currentOrder);
    return (
        <div className="container indent">
            <h1>Cart</h1>
            { currentOrder ? () ; }
            <div className={styles.cart_item}></div>
        </div>
    )
}