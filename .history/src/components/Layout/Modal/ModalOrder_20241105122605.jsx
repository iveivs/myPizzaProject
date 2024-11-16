// import styles from "./ModalOrder.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { closeModal } from "../../../actions/close-modal";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export const ModalOrder = ({ currentOpenModalWindow }) => {
//     const [product, setProduct] = useState();
//     const [loading, setLoading] = useState(true);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         axios
//             .get(`http://localhost:3002/products/${currentOpenModalWindow}`)
//             .then((response) => {
//                 setProduct(response.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//                 setLoading(false);
//             });
//     }, []);

//     const handleCloseModal = (e) => {
//         if (e.target.getAttribute("data-close")) {
//             console.log("Im here");
//             dispatch(closeModal());
//         }
//     };
//     return (
//         <div
//             className={styles.overlay}
//             onClick={handleCloseModal}
//             data-close="close"
//         >
//             <div className={styles.wrapper}>
//                 <h3>Modal</h3>
//                 <p>{currentOpenModalWindow}</p>
//             </div>
//         </div>
//     );
// };

import styles from "./ModalOrder.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../actions/close-modal";
import { useEffect, useState } from "react";
import axios from "axios";

export const ModalOrder = ({ currentOpenModalWindow }) => {
    const [product, setProduct] = useState(null); // Инициализация как null
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        // Проверяем, если currentOpenModalWindow имеет значение
        if (currentOpenModalWindow) {
            setLoading(true); // Начинаем загрузку
            axios
                .get(`http://localhost:3002/products/${currentOpenModalWindow}`)
                .then((response) => {
                    setProduct(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    setLoading(false);
                });
        }
    }, [currentOpenModalWindow]); // Добавляем currentOpenModalWindow как зависимость

    const handleCloseModal = (e) => {
        if (e.target.getAttribute("data-close")) {
            dispatch(closeModal());
        }
    };

    return (
        <div
            className={styles.overlay}
            onClick={handleCloseModal}
            data-close="close"
        >
            <div className={styles.wrapper}>
                <h3>Modal</h3>
                {loading ? (
                    <p>Loading...</p> // Отображаем сообщение о загрузке
                ) : product ? (
                    <div>
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        <p>Price: {product.price} ₽</p>
                        <img src={product.src} alt="pizza i" />
                        {/* Здесь можно добавить другие данные о продукте */}
                    </div>
                ) : (
                    <p>Product not found</p> // Сообщение, если продукт не найден
                )}
            </div>
        </div>
    );
};

