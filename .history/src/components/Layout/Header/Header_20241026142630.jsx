import styles from './Header.module.css'

function Header() {
    return(
        <header className={styles.header}>
                <div className="container">
                    <div className="header row">
                        <div className="logo col-3">
                            <img src="/images/logoPizza.avif" alt="Logo" className="logo-img"/>
                        </div>
                        <nav className={`${styles.menu} col-3`}>
                            <ul className="menu_items">
                                <li className="menu_item">
                                    <a className="menu_item_link underline-effect">Home</a>
                                </li>
                                <li className="menu_item">
                                    <a className="menu_item_link underline-effect">Catalog</a>
                                </li>
                                <li className="menu_item">
                                    <a className="menu_item_link underline-effect">Reviews</a>
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
                        
                    </div>
                </div>
            </header>
    )
}

export default Header