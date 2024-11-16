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
            <h1>Cart</h1>
            { currentOrder ? (
                currentOrder.map((order, i)=> (
                    <div key={i} className={styles.cart_item}>
                        <h3>{order.name}</h3>
                        <p>{order.description}</p>
                        <p>amount: {}</p>
                    
                </div>
                ))
            ) : (<>Text2</>)}
            
        </div>
    )
}