import styles from "./Authorization.module.css";
import { Link } from 'react-router-dom'
export const Authorization = () => {
    return (
        <div className="container indent">
            <form action="">
                <h2 className={styles.title_authorization}>Авторизация</h2>
                <input className={styles.input_login} type="text" placeholder="Введите логин..." />
                <input className={styles.input_password}  type="text" placeholder="Введите пароль..." />
            </form>
            <Link to>Регистрация</Link>
            <div className={styles.button_authorization}>
                <div className={`button ${styles.btn_modificated}`}>Войти</div>
            </div>
            
            {/* <div className={styles.test}>TEST</div> */}
            
        </div>
    );
};
