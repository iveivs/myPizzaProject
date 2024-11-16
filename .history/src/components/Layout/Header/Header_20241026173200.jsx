import styles from './Header.module.css'

function Header() {
    return(
        <header className={styles.header}>
                <div className="container">
                    <div className={`${styles.header} row`}>
                        <div className={`${styles.logo} col-3`}>
                            <img src="/images/logoPizza.avif" alt="Logo" className={`${styles.logo_img}`}/>
                        </div>
                        <nav className={`${styles.menu} col-3`}>
                            <ul className={`${styles.menu_items} col-3`}>
                                <li className={`${styles.menu_item}`}>
                                    <a className={`${styles.menu_item_link} ${styles.underline_effect}`}>Home</a>
                                </li>
                                <li className={`${styles.menu_item}`}>
                                    <a className={`${styles.menu_item_link} ${styles.underline_effect}`}>Catalog</a>
                                </li>
                                <li className={`${styles.menu_item}`}>
                                    <a className={`${styles.menu_item_link} ${styles.underline_effect}`}>Reviews</a>
                                </li>
                            </ul>
                        </nav>
                        <div className={`${styles.header_options} `}" ">
                            <div className="cart">
                                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                            </div>
                            <div className="account">
                                <i className="fa fa-user-o" aria-hidden="true"></i>
                            </div>
                        </div>
                        {`${styles}`}
                    </div>
                </div>
            </header>
    )
}

export default Header