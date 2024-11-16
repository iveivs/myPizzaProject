import styles from "./PageProducts.module.css";
import { isDataArray } from "../../utils/utils";
import { useState } from "react";
import { selectProductOrder } from "../../selectors/select-product-order";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../actions/add-product-to-cart";
import { selectModal } from "../../selectors/select-modal";
import { openModal } from "../../actions/open-modal";
import { ModalOrder } from "../../components/Layout/Modal/ModalOrder";

const products = [
    {
        id: 1,
        name: "Pizza Mixic",
        description:
            "Quarter pizza with ham, chicken, tomatoes, feta cheese, mozzarella, signature alfredo sauce",
        price: 899,
        src: "/images/product_1.avif",
    },
    {
        id: 2,
        name: "Pizza Julien",
        description:
            "Chicken, champignons, creamy mushroom sauce, red onion, garlic, mozzarella, cheddar and parmesan cheese mixture, signature alfredo sauce",
        price: 799,
        src: "/images/product_2.avif",
    },
    {
        id: 3,
        name: "Pepperoni fresh",
        description:
            "Spicy pepperoni, increased portion of mozzarella, tomatoes, signature tomato sauce",
        price: 699,
        src: "/images/product_3.avif",
    },
    {
        id: 4,
        name: "Ham and cheese",
        description: "Ham, mozzarella, special alfredo sauce",
        price: 899,
        src: "/images/product_4.avif",
    },
    {
        id: 5,
        name: "Товар 5",
        description: "some description text",
        price: 699,
        src: "/images/product_4.avif",
    },
    {
        id: 6,
        name: "Товар 6",
        description: "some description text",
        price: 799,
        src: "/images/product_3.avif",
    },
    {
        id: 7,
        name: "Товар 7",
        description: "some description text",
        price: 599,
        src: "/images/product_2.avif",
    },
    {
        id: 8,
        name: "Товар 8",
        description: "some description text",
        price: 699,
        src: "/images/product_1.avif",
    },
];

function PageProducts() {
    const [amountOrderedProducts, setAmountOrderedProducts] = useState(0);
    const dispatch = useDispatch();
    // const currentOrder = useSelector(selectProductOrder);

    const isModalOpen = useSelector(selectModal)
    // console.log('isModalOpen', isModalOpen);

    const orderProduct = (e) => {
        const nearestElement = e.target.closest("[data-id]");
        const dataIdValue = nearestElement
            ? nearestElement.getAttribute("data-id")
            : null;

        if (dataIdValue !== null) {
            dispatch(openModal())
            // console.log('isModalOpen', isModalOpen);
            // dispatch(addProductToCart(dataIdValue));
            // console.log("currentOrder", currentOrder);
            // setAmountOrderedProducts((prevAmount) => prevAmount + 1);
        }
    };
    return (
        <>
        
        </>
        
    );
}

export default PageProducts;
