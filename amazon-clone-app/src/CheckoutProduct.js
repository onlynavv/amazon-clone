import React from 'react'
import './checkoutProduct.css'
import Rating from './Rating'
import { useGlobalContext } from './context'

const CheckoutProduct = ({id,image,title,price,rating}) => {

    const {removeItem} = useGlobalContext()

    return (
        <div className='checkout-product'>
            <img src={image} alt={title} className='checkoutProduct-image'></img>
            <div className='checkoutProduct-info'>
                <p className='checkoutProduct-title'>{title}</p>
                <p className='checkoutProduct-price'>
                    <small>Rs.</small><strong>{price}</strong>
                </p>
                <Rating rating={rating} />
                <button onClick={()=>removeItem(id)}>Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
