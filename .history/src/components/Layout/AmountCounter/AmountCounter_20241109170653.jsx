export const AmountCounter = () => {
    return (
        <>
            <div className={styles.amount}>
                <p
                    className={styles.decreace}
                    onClick={() => decreaceProductAmount(setAmount)}
                >
                    –
                </p>
                <p>{amount}</p>
                <p
                    className={styles.increace}
                    onClick={() => increaceProductAmount(setAmount)}
                >
                    +
                </p>
            </div>
        </>
    );
};
