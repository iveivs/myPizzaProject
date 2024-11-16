import styles from "./Reviews.module.css";
import { useEffect, useState } from "react";

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    // const [visiableReviews, setVisiableReviews] = useState(3);
    // const [indexesForShow, setIndexesForShow] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex(prev => prev += 1)
    }

    const nextSlide = () => {
        setCurrentIndex(prev => prev += 1)
    }

    // const nextSlide = (caseString, arrReviews) => {
    //     switch(caseString){
    //         case "+":
    //             arrReviews.forEach((elem, i) => {
    //                 if(i < visiableReviews){
    //                     setIndexesForShow(prev => {})
    //                 }
    //             } )
    //     }
    // }

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
