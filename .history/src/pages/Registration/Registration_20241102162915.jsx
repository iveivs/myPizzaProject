import styles from "./Registration.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";
export const Registration = () => {
    const [userLogin, setUserLogin] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [confirmUserPassword, setConfirmUserPassword] = useState("");
    const [error, setError] = useState("");
    const [isUserCreated, setIsUserCreated] = useState(false)

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

        setIsUserCreated(true)




        // <Navigate to="/" />
        console.log("User Data:", userData);
        setError("");
    };
    return (
        <div className="container indent">
            {isUserCreated ? () }
            
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
