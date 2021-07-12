import React from 'react'
import './Product.css'
import { useGlobalContext } from './context'
import Rating from './Rating';

const Product = ({title,image,price,rating}) => {

    const {addToCart} = useGlobalContext()

    return (
        <div className='product'>
            <div className="product-info">
                <p>{title}</p>
                <p className='product-price'>
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <Rating rating={rating} />
            </div>
            <img src={image} alt=''></img>
            <button onClick={()=>addToCart(title,image,price,rating)}>Add to Cart</button>
        </div>
    )
}

export default Product
