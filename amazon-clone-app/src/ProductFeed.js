import React,{useEffect,useState} from 'react'
import ProductItem from './ProductItem'
import './ProductFeed.css'
import Category from './Category'
import { Link } from 'react-router-dom'

const ProductFeed = ({products}) => {

    const [categories,setCategories] = useState([])

    const fetchCategories = async() => {
        const resp = await fetch('https://fakestoreapi.com/products/categories')
        const categoryData = await resp.json()
        setCategories(categoryData)
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <div className='feed-container'>
            {products.slice(0,3).map((product)=>{
                const {title,id,price,description,category,image} = product
                return(
                    <ProductItem key={id} title={title} price={price} id={id} description={description} category={category} image={image}  />
                )
            })}

            <div className="feed-category">
                <div className="category-header">
                    <h3>Categories</h3>
                </div>
                <div className="categories">
                            {categories.map((category)=>{
                                return(
                                    <Link key={category} to={`/category/${category}`}>
                                        <Category key={category}  category={category} />
                                    </Link>
                                )
                            })}
                </div>
            </div>

            <div style={{display:'grid',gridTemplateColumns:'auto auto',gridColumnEnd:'span 3'}}>
                {products.slice(4,6).map((product)=>{
                const {title,id,price,description,category,image} = product
                return(
                    <ProductItem key={id} title={title} price={price} id={id} description={description} category={category} image={image}  />
                )
            })}
            </div>

            <img className='checkout-ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Monitors/Co-op/LG/LG_June_1500x300.jpg' alt=''></img>

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
