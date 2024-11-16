import styles from "./Registration.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export const Registration = () => {
    const [userLogin, setUserLogin] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [confirmUserPassword, setConfirmUserPassword] = useState("");
    const [error, setError] = useState("");
    const [isUserCreated, setIsUserCreated] = useState()

    const validatePassword = (password) => {
        const passwordRegex = /^[a-zA-Z0-9]{4,20}$/;
        return passwordRegex.test(password);
    };

    const onSubmit = () => {
        if (!validatePassword(userPassword)) {
            setError(
                "Пароль должен содержать только буквы и цифры, длиной от 4 до 20 символов."
            );
            return;
        }
        if (userPassword !== confirmUserPassword) {
            setError("Пароли не совпадают.");
            return;
        }

        const userData = {
            login: userLogin,
            password: userPassword,
        };

        const expr = 
        console.log("User Data:", userData);
        setError("");
    };
    return (
        <div className="container indent">
            <form onSubmit={(e) => e.preventDefault()}>
                <h2 className={styles.title_registration}>Регистрация</h2>
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
                <input
                    className={styles.input_password}
                    type="text"
                    placeholder="Подтвердите пароль..."
                    value={confirmUserPassword}
                    onChange={(e) => setConfirmUserPassword(e.target.value)}
                />
                {error && <p className={styles.error}>{error}</p>}
                <button
                    type="button"
                    className={`button ${styles.btn_modificated}`}
                    onClick={onSubmit}
                >
                    Зарегистрироваться
                </button>
            </form>
            <Link className={styles.registration_link} to="/">
                На главную
            </Link>
            
        </div>
    );
};


// {/* <div className={styles.button_authorization}>
//                 <div className={`button ${styles.btn_modificated}`}>
//                     Зарегестрироваться
//                 </div>
//             </div> */}
