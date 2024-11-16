import styles from './'
export const Authorization = () => {
    return (
        <div className="container indent">
            <form action="">
                <h3>Авторизация</h3>
                <input type="text" placeholder="Введите логин" /> 
                <br />
                <input type="text" placeholder="Введите пароль" />
                <div className={`${styles.button}`}></div>
            </form>
        </div>
    );
};
