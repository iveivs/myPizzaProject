import styles from './Cart.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectProductOrder } from '../../selectors/select-product-order'
import { useEffect } from 'react'
import { addProductToCart } from '../../actions/add-product-to-cart'


export const Cart = () => {
    const currentOrder = useSelector(selectProductOrder)
    const dispatch = useDispatch()
    // const []
    console.log('currentOrder', currentOrder);
    
    useEffect(() => {
        currentOrder
    })

    const handleDelete = (id) => {
        const filteredOrder = currentOrder.filter((order => order.id !== id))
        console.log('filteredOrder',filteredOrder);
        dispatch(addProductToCart)
    }
    
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
                        <div className={`${styles.modif_btn} button`} onClick={() => handleDelete(order.id)}>Удалить</div>
                </div>
                ))
            ) : (<>Text2</>)}
            
        </div>
    )
}