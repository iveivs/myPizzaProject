import { useSelector, useDispatch } from "react-redux";
import styles from "./Authorization.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addUser } from "../../actions/add-user";

export const Authorization = () => {
    const [userLogin, setUserLogin] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    const dispatch = useDispatch()

    useEffect(() => {
        fetch("http://localhost:3002/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => {
                console.error("Error fetching users:", error);
                setError('Users not found');
            });
    }, []); 

    const confirmAuthorization = () => {
        if(userLogin && userPassword) {
            users.map((user) => {
                if(user.login === userLogin && user.pass) {

                }
            })
        }
    }

    return (
        <div className="container indent">
            {/* {users.length ? <p>users added</p> : <p>users not add</p>} */}
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
                    type="password" 
                    placeholder="Введите пароль..."
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                />
                <Link className={styles.registration_link} to="/registration">
                    Регистрация
                </Link>
            </form>

            <div className={styles.button_authorization}>
                <div className={`button ${styles.btn_modificated}`} onClick={confirmAuthorization}>Войти</div>
            </div>

            {error && <p className={styles.error_message}>{error}</p>}
        </div>
    );
};
