import styles from "./Reviews.module.css";
import { useEffect, useState } from "react";

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [visiableReviews, setVisiableReviews] = useState(3);

    

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
                {reviews.length ? (
                    reviews.map((elem) => (
                        <div key={elem.id} className={styles.review_item}>
                            <div> {elem.name}</div>
                        </div>
                    ))
                ) : (
                    <div>no data</div>
                )}
            </div>
        </div>
    );
};
