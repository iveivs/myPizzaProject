import styles from "./Authorization.module.css";
export const Authorization = () => {
    return (
        <div className="container indent">
            <form action="">
                <h3>Авторизация</h3>
                <input className={styles.input_login} type="text" placeholder="Введите логин" />
                <input className={styles.input_password}  type="text" placeholder="Введите пароль" />
            </form>
            <div className="">

            </div>
            <div className=button">Войти</div>
        </div>
    );
};
