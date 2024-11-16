import styles from "./Registration.module.css";
import { Link } from 'react-router-dom'
import { useState } from "react";
export const Registration = () => {
    const [userLogin, setUserLogin] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [confirmUserPassword, setConfirmUserPassword] = useState('')
    const [error, setError] = useState('');

    const validatePassword = (password) => {
        const passwordRegex = /^[a-zA-Z0-9]{4,20}$/
        return passwordRegex.test(password)
    }
    
    const onSubmit = () => {
        if(!validatePassword(userPassword)) {
            setError('Пароль должен содержать только буквы и цифры, длиной от 4 до 20 символов.');
            return;
        }
        if(userPassword !== confirmUserPassword)
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
                <div className={`button ${styles.btn_modificated}`}>Зарегестрироваться</div>
            </div>
        </div>
    );
};
