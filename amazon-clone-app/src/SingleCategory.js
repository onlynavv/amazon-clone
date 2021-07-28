import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ProductItem from './ProductItem'
import './ProductFeed.css'

const SingleCategory = () => {

    const url = 'https://fakestoreapi.com/products/category/'

    const {categoryItem} = useParams()
    console.log(categoryItem)

    const [categoryInfo,setCategoryInfo] = useState([])

    const fetchCategory = async() => {
        const resp = await fetch(`${url}${categoryItem}`)
        const categoryData = await resp.json()
        console.log(categoryData)

        setCategoryInfo(categoryData)
    }

    useEffect(()=>{
        fetchCategory()
    },[])

    return (
        <>
        <div className='single-categoryHeader'>
            <h3>Category: {categoryItem}</h3>
        </div>
        <div className='single-categoryContainer'>
            {categoryInfo.map((product)=>{
                const {title,id,price,description,category,image} = product
                return(
                    <ProductItem key={id} title={title} price={price} id={id} description={description} category={category} image={image}  />
                )
            })}
        </div>
        </>
    )
}

export default SingleCategory
