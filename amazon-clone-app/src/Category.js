import React from 'react'
import {GiBigDiamondRing} from 'react-icons/gi'
import {CgAppleWatch} from 'react-icons/cg'
import {ImMan, ImWoman} from 'react-icons/im'
import './ProductFeed.css'

const Category = ({category}) => {

    return (
        <>
            
                    <div className="category">
                            {(category === 'electronics' && <CgAppleWatch />) || (category === 'jewelery' && <GiBigDiamondRing />) || (category === 'men\'s clothing' && <ImMan />) || (category === 'women\'s clothing' && <ImWoman />) }
                            {category}
                    </div>
                
        </>
    )
}

export default Category
