import styles from "./Authorization.module.css";
export const Authorization = () => {
    return (
        <div className="container indent">
            <form action="">
                <h2 className={styles.title_authorization}>Авторизация</h2>
                <input className={styles.input_login} type="text" placeholder="Введите логин..." />
                <input className={styles.input_password}  type="text" placeholder="Введите пароль..." />
            </form>
            <div className={styles.button_authorization}>
                <div className={`button ${styles.btn}`}>Войти</div>
            </div>
            {/* <div className={styles.test}>TEST</div> */}
            
        </div>
    );
};
