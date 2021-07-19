import React from 'react'
import './checkoutProduct.css'
import Rating from './Rating'
import { useGlobalContext } from './context'

const CheckoutProduct = ({id,image,title,price,rating,description,hasPrime}) => {

    const {removeItem} = useGlobalContext()

    const despTruncate = (string,n) => {
        return string?.length > n ? string.substr(0,n-1) + '...' : string
    }

    return (
        <div className='checkout-product'>
            <img src={image} alt={title} className='checkoutProduct-image'></img>
            <div className='checkoutProduct-info'>
                <p className='checkoutProduct-title'>{title}</p>
                <p className='checkoutProduct-price'>
                    <small>Rs.</small><strong>{price}</strong>
                </p>
                <Rating rating={rating} />
                <p>{despTruncate(description,70)}</p>
                {hasPrime && (
                    <div className='prime-container'>
                        <img src='https://www.nicepng.com/png/full/115-1159983_amazon-prime-logo-prime-amazon.png' alt='prime-logo'></img>
                        <p>FREE Next-day Delivery</p>
                    </div>
                )}
            </div>
            <button className='checkoutProduct-btn' onClick={()=>removeItem(id)}>Remove from cart</button>
        </div>
    )
}

export default CheckoutProduct
