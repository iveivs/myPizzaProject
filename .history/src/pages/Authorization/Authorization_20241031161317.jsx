import styles from "./Authorization.module.css";
export const Authorization = () => {
    return (
        <div className="container indent">
            <form action="">
                <h3>Авторизация</h3>
                <input  type="text" placeholder="Введите логин" />
                <br />
                <input type="text" placeholder="Введите пароль" />
                <div className="button">Войти</div>
            </form>
        </div>
    );
};
