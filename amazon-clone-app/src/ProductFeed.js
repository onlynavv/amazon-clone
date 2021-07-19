import React from 'react'
import ProductItem from './ProductItem'
import './ProductFeed.css'

const ProductFeed = ({products}) => {

    return (
        <div className='feed-container'>
            {products.slice(0,3).map((product)=>{
                const {title,id,price,description,category,image} = product
                return(
                    <ProductItem key={id} title={title} price={price} id={id} description={description} category={category} image={image}  />
                )
            })}

            <img className='checkout-ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Monitors/Co-op/LG/LG_June_1500x300.jpg' alt=''></img>

            <div style={{display:'grid',gridTemplateColumns:'auto auto',gridColumnEnd:'span 3'}}>
                {products.slice(4,6).map((product)=>{
                const {title,id,price,description,category,image} = product
                return(
                    <ProductItem key={id} title={title} price={price} id={id} description={description} category={category} image={image}  />
                )
            })}
            </div>

            {products.slice(6,products.length).map((product)=>{
                const {title,id,price,description,category,image} = product
                return(
                    <ProductItem key={id} title={title} price={price} id={id} description={description} category={category} image={image}  />
                )
            })}

        </div>
    )
}

export default ProductFeed
