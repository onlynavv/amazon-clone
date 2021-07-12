import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import './Rating.css'

const Rating = ({rating}) => {
    return (
        <div className='product-rating'>
            {[1,2,3,4,5].map((value,index)=>{
                return(
                    <>
                        <span key={index}>{rating + 1 === value + 0.5 ? <StarHalfIcon /> : rating > value ? <StarIcon /> : <StarOutlineIcon />}</span>
                    </>
                )
            })}
        </div>
    )
}

export default Rating
