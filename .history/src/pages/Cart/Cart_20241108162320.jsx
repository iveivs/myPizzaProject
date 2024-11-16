import styles from './Cart.module.css'
import { useSelector } from 'react-redux'
import { selectProductOrder } from '../../selectors/select-product-order'
import { useEffect } from 'react'


export const Cart = () => {
    const currentOrder = useSelector(selectProductOrder)
    console.log('currentOrder', currentOrder);
    
    useEffect(() => {
        
    })
    // const getOrderFromServerToCart = fetch(`http://localhost:3002/products/${id}`)
    return (
        <div className="container indent">
            <h1>Cart</h1>
            { currentOrder ? (
                currentOrder.map((order, i)=> (
                    <div key={i} className={styles.cart_item}>
                    {order.id}
                </div>
                ))
            ) : (<>Text2</>)}
            
        </div>
    )
}