import styles from "./Authorization.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export const Authorization = () => {
    const [userLogin, setUserLogin] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch("http://localhost:3002/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => setError())
    });
    return (
        <div className="container indent">
            <form action="">
                <h2 className={styles.title_authorization}>Авторизация</h2>
                <input
                    className={styles.input_login}
                    type="text"
                    placeholder="Введите логин..."
                    value={userLogin}
                    onChange={(e) => setUserLogin(e.target.value)}
                />
                <input
                    className={styles.input_password}
                    type="text"
                    placeholder="Введите пароль..."
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                />
                <Link className={styles.registration_link} to="/registration">
                    Регистрация
                </Link>
            </form>

            <div className={styles.button_authorization}>
                <div className={`button ${styles.btn_modificated}`}>Войти</div>
            </div>

            {/* <div className={styles.test}>TEST</div> */}
        </div>
    );
};
