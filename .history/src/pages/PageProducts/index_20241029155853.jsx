import styles from "./PageProducts.module.css";
import { isDataArray } from "../../utils/utils";
const products = [
    {
        id: 1,
        name: "Pizza Mixic",
        description:
            "Quarter pizza with ham, chicken, tomatoes, feta cheese, mozzarella, signature alfredo sauce",
        price: 899,
        src: "/images/product_1.avif",
    },
    {
        id: 2,
        name: "Pizza Julien",
        description:
            "Chicken, champignons, creamy mushroom sauce, red onion, garlic, mozzarella, cheddar and parmesan cheese mixture, signature alfredo sauce",
        price: 799,
        src: "/images/product_2.avif",
    },
    {
        id: 3,
        name: "Pepperoni fresh",
        description:
            "Spicy pepperoni, increased portion of mozzarella, tomatoes, signature tomato sauce",
        price: 699,
        src: "/images/product_3.avif",
    },
    {
        id: 4,
        name: "Товар 4",
        description: "Ham, mozzarella, special alfredo sauce",
        price: 899,
        src: "/images/product_4.avif",
    },
    {
        id: 5,
        name: "Товар 5",
        description: "some description text",
        price: 699,
        src: "/images/product_4.avif",
    },
    {
        id: 6,
        name: "Товар 6",
        description: "some description text",
        price: 799,
        src: "/images/product_3.avif",
    },
    {
        id: 7,
        name: "Товар 7",
        description: "some description text",
        price: 599,
        src: "/images/product_2.avif",
    },
    {
        id: 8,
        name: "Товар 8",
        description: "some description text",
        price: 699,
        src: "/images/product_1.avif",
    },
];

function PageProducts() {
    console.log("TEST");
    return (
        <div className="indent container">
            <h2 className={`${styles.products_title}`}>Products</h2>
            {/* <div className="products_filter">
                <div className="products_filter_block products_filter_size">
                    <div className="products_filter_heading">
                        <span>Size</span>
                        <i className="ti ti-chevron-down"></i>
                    </div>
                    <ul className="products_filter_menu">
                        <li className="products_filter_menu_item active">
                            All
                        </li>
                        <li className="products_filter_menu_item">Small</li>
                        <li className="products_filter_menu_item">Middle</li>
                        <li className="products_filter_menu_item">Big</li>
                    </ul>
                </div>
                <div className="products_filter_block products_filter_type">
                    <div className="products_filter_heading">
                        <span>Type of dough</span>
                        <i className="ti ti-chevron-down"></i>
                    </div>
                    <ul className="products_filter_menu">
                        <li className="products_filter_menu_item active">
                            All
                        </li>
                        <li className="products_filter_menu_item">
                            Traditional
                        </li>
                        <li className="products_filter_menu_item">Thin</li>
                    </ul>
                </div>
            </div> */}
            <div className="row">
                {isDataArray(products) ? (
                    products.map((product) => {
                        return (
                            <div
                                key={product.id}
                                className={"col-4 " + styles.product_item}
                            >
                                <img src={product.src} alt="" />
                                <div className={styles.product_wrapper}>
                                    <div className={styles.product_card_top}>
                                        <h3 className={styles.product_name}>
                                            {product.name}
                                        </h3>
                                        <p
                                            className={
                                                styles.product_description
                                            }
                                        >
                                            {product.description}
                                        </p>
                                    </div>
                                    <div className={styles.product_bottom}>
                                        <p className={styles.product_pdice}>{product.price} ₽</p>
                                        <a
                                            href="#"
                                            className={styles.product_button}
                                        >
                                            <i
                                                className="fa fa-cart-arrow-down"
                                                aria-hidden="true"
                                            ></i>
                                            <span className={styles.produc}>Order</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>Товары не найдены</p>
                )}
            </div>
        </div>
    );
}

export default PageProducts;
