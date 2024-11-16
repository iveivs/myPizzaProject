import styles from './Header.module.css'

function Header() {
    return(
        <header className={styles.header}>
                <div className="container">
                    <div className=``>
                        <div className="logo col-3">
                            <img src="/images/logoPizza.avif" alt="Logo" className="logo-img"/>
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
                        <div className="header_options col-3">
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