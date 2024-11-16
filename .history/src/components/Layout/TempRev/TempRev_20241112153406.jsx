import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./TempRev.module.css";

export const TempRev = () => {
    const [reviews, setReviews] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        axios
            .get("http://localhost:3002/reviews") // Подставьте свой URL json-сервера
            .then((response) => setReviews(response.data))
            .catch((error) =>
                console.error("Ошибка при загрузке данных:", error)
            );
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 >= reviews.length - 2 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 3 : prevIndex - 1
        );
    };

    if (!reviews.length) {
        return <p>Загрузка...</p>;
    }

    const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

    return (
        <div className={styles.slider}>
            <button onClick={prevSlide} className>{"<"}</button>
            <div className={styles.slides}>
                {visibleReviews.map((review) => (
                    <div key={review.id} className={styles.slide}>
                        <img
                            src={review.src}
                            alt={review.name}
                            className={styles.image}
                        />
                        <h3>{review.name}</h3>
                        <p>{review.text}</p>
                        <p>Rating: {review.rating}/5</p>
                    </div>
                ))}
            </div>
            <button onClick={nextSlide}>{">"}</button>
        </div>
    );
};


