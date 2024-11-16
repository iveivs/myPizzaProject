import styles from './Cart.module.css'
import { UseSelector } from 'react-redux'
import { selectProductOrder } from '../../selectors/select-product-order'

export const Cart = () => {

    return (
        <div className="container indent">
            <h1>Cart</h1>
        </div>
    )
}