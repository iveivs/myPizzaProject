import styles from './Reviews.module.css'
import { useEffect, useState } from 'react'

export const Reviews = () => {

    useEffect(() => {
        fetch('http://localhost:3002/')
    })
    return (
        <div className="container indent">
            <h2>Reviews</h2>
        </div>
    )
}