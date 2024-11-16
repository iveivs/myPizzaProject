import styles from "./Registration.module.css";
import { Link } from 'react-router-dom'
export const Registration = () => {
    const [userLogin]
    const onSubmit = () => {

    }
    return (
        <div className="container indent">
            <form action="">
                <h2 className={styles.title_registration}>Регистрация</h2>
                <input className={styles.input_login} type="text" placeholder="Введите логин..." />
                <input className={styles.input_password}  type="text" placeholder="Введите пароль..." />
                <input className={styles.input_password}  type="text" placeholder="Подтвердите пароль..." />
                <Link className={styles.registration_link} to="/">На главную</Link>
            </form>
            <div className={styles.button_authorization}>
                <div className={`button ${styles.btn_modificated}`}>Войти</div>
            </div>
        </div>
    );
};
