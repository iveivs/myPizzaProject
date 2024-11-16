import styles from './Footer.module.css'

function Footer() {
    return(
        <footer class="footer">
                <div class="indent container">
                    <div class="row">
                        <div class="col-4">
                            <h3 class="footer_heading">About us</h3>
                            <div class="footer_description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quisquam quam ipsa quas vero illo, reprehenderit minima placeat laborum voluptatum fugiat delectus iure doloribus dolores</div>
                        </div>
                        <div class="col-1">
                            <h3 class="footer_heading">Links</h3>
                            <ul class="footer_items">
                                <li class="footer_item">
                                    <a href="" class="footer_item_link">
                                        <i class="ti ti-home-2"></i>
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li class="footer_item">
                                    <a href="" class="footer_item_link">
                                        <i class="ti ti-pizza"></i>
                                        <span>Products</span>
                                    </a>
                                </li>
                                <li class="footer_item">
                                    <a href="" class="footer_item_link">
                                        <i class="ti ti-brand-hipchat"></i>
                                        <span>Reviews</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-1">
                            <h3 class="footer_heading">Social</h3>
                            <ul class="footer_items">
                                <li class="footer_item">
                                    <a href="" class="footer_item_link">
                                        <i class="ti ti-brand-facebook"></i>
                                        <span>Facebook</span>
                                    </a>
                                </li>
                                <li class="footer_item">
                                    <a href="" class="footer_item_link">
                                        <i class="ti ti-brand-instagram"></i>
                                        <span>Instagram</span>
                                    </a>
                                </li>
                                <li class="footer_item">
                                    <a href="" class="footer_item_link">
                                        <i class="ti ti-brand-whatsapp"></i>
                                        <span>WhatsApp</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-2">
                            <h3 class="footer_heading">Contacts us</h3>
                            <ul class="footer_items">
                                <li class="footer_item">
                                    <a href="tel:+7-(987)-65-43-21" class="footer_item_link">
                                        <i class="ti ti-phone-call"></i>
                                        <span>+7-(987)-65-43-21</span>
                                    </a>
                                </li>
                                <li class="footer_item">
                                    <a href="#ссылка_на_карту" class="footer_item_link">
                                        <i class="ti ti-map-pin"></i>
                                        <span>Moscow, Lenina st. 1</span>
                                    </a>
                                </li>
                                <li class="footer_item">
                                    <a href="mailto:info@pizza.ru" class="footer_item_link">
                                        <i class="ti ti-mail-opened"></i>
                                        <span>info@pizza.ru</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer