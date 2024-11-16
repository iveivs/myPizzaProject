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
