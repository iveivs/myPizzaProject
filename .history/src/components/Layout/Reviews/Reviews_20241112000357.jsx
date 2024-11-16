import styles from './Reviews.module.css'
import { useEffect, useState } from 'react'

export const Reviews = () => {
    const [reviews, setReviews] = useState([])

    
    useEffect(() => {
        fetch('http://localhost:3002/reviews')
        .then(((response => response.json())))
    })
    return (
        <div className="container indent">
            <h2>Reviews</h2>
        </div>
    )
}