import styles from "./Authorization.module.css";
import { Link } from 'react-router-dom'
import { useState } from "react";

export const Authorization = () => {
    const [userLogin, setUserLogin] = useState
    return (
        <div className="container indent">
            <form action="">
                <h2 className={styles.title_authorization}>Авторизация</h2>
                <input className={styles.input_login} type="text" placeholder="Введите логин..." />
                <input className={styles.input_password}  type="text" placeholder="Введите пароль..." onChange={(e) }/>
                <Link className={styles.registration_link} to="/registration">Регистрация</Link>
            </form>
            
            <div className={styles.button_authorization}>
                <div className={`button ${styles.btn_modificated}`}>Войти</div>
            </div>
            
            {/* <div className={styles.test}>TEST</div> */}
            
        </div>
    );
};
