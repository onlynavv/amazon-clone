import React,{useState} from 'react'
import Rating from './Rating';
import './ProductItem.css'
import Currency from 'react-currency-formatter'
import { useGlobalContext } from './context'

const ProductItem = ({title,id,price,description,category,image}) => {

    const [hasPrime] = useState(Math.random() < 0.5)

    const despTruncate = (string,n) => {
        return string?.length > n ? string.substr(0,n-1) + '...' : string
    }

    const {addToCart} = useGlobalContext()

    return (
        <div className='product'>
            <p className='product-category'>{category}</p>

            <img src={image} alt={title}></img>
            
            <div className='product-info'>
            <h4>{title}</h4>

            <Rating />
            
            <p className='product-description'>{despTruncate(description,80)}</p>
            
            <div className='product-price'>
                <Currency quantity={price}  currency='INR' />
            </div>

            {hasPrime && (
                <div className='prime-container'>
                    <img src='https://www.nicepng.com/png/full/115-1159983_amazon-prime-logo-prime-amazon.png' alt='prime-logo'></img>
                    <p>FREE Next-day Delivery</p>
                </div>
            )}
            </div>

            <button onClick={()=>addToCart(id,title,image,price,description,hasPrime)}>Add to cart</button>
        </div>
    )
}

export default ProductItem
