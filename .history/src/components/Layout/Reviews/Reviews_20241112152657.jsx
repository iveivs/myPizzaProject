import styles from "./Reviews.module.css";
import { useEffect, useState } from "react";

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    // const [visiableReviews, setVisiableReviews] = useState(3);
    // const [indexesForShow, setIndexesForShow] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);

    const visiableReviews = reviews.slice(currentIndex, currentIndex + 3);

    console.log("visiableReviews", visiableReviews);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            // prevIndex + 1 >= reviews.length - 2 ? 0 : prevIndex + 1 // для бесконечного прокручивания 
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            // prevIndex === 0 ? reviews.length - 3 : prevIndex - 1
        );
    };

    useEffect(() => {
        fetch("http://localhost:3002/reviews")
            .then((response) => response.json())
            .then((data) => setReviews(data));
    }, []);

    if (reviews.length) {
        console.log("reviews", reviews);
    }
    return (
        <div className="container indent">
            <h2>Reviews</h2>
            <div className={styles.items_wrapper}>
                <i
                    className="fa fa-arrow-left"
                    aria-hidden="true"
                    onClick={prevSlide}
                ></i>
                {visiableReviews.length ? (
                    visiableReviews.map((elem) => (
                        <div key={elem.id} className={styles.review_item}>
                            <div> {elem.name}</div>
                        </div>
                    ))
                ) : (
                    <div>no data</div>
                )}
                <i
                    className="fa fa-arrow-right"
                    aria-hidden="true"
                    onClick={nextSlide}
                ></i>
            </div>
        </div>
    );
};
