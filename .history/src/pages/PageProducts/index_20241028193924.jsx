import styles from './PageProducts.module.css'
import { isDataArray } from '../../utils/utils'
const products = [
    {id: 1, name: 'Товар 1', description: 'some description text', price: 899, src: '/images/product_1.avif'},
    {id: 2, name: 'Товар 2', description: 'some description text', price: 799, src: '/images/product_2.avif'},
    {id: 3, name: 'Товар 3', description: 'some description text', price: 699, src: '/images/product_3.avif'},
    {id: 4, name: 'Товар 4', description: 'some description text', price: 899, src: '/images/product_4.avif'},
    {id: 5, name: 'Товар 5', description: 'some description text', price: 699, src: '/images/product_4.avif'},
    {id: 6, name: 'Товар 6', description: 'some description text', price: 799, src: '/images/product_3.avif'},
    {id: 7, name: 'Товар 7', description: 'some description text', price: 599, src: '/images/product_2.avif'},
    {id: 8, name: 'Товар 8', description: 'some description text', price: 699, src: '/images/product_1.avif'},
]

function PageProducts() {
    console.log('TEST');
    return(
        <div className='indent container'>
            <h2 className={`${styles.products_title}`}>Products</h2>
            <div className="row">
                {
                    isDataArray(products) ? (
                        products.map( product => {
                            return (
                                <div key={product.id} className={"col-4 " + styles.product}>
                                    <img src={product.src} alt="" />
                                    <h3>{product.name}</h3>
                                    <p>{}</p>
                                    <div className={styles.product_bottom}>
                                        <p>{product.price} руб</p>
                                        <a href="#" className={styles.product_button}>
                                            <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                                            <span>Order</span>
                                        </a>
                                    </div>

                                </div>
                            ) 
                        })
                    ) : (
                        <p>Товары не найдены</p>
                    )
                }
            </div>
        </div>
    )
}

export default PageProducts

