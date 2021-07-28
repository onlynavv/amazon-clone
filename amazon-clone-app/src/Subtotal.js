import React from 'react'
import './Subtotal.css'
import { useGlobalContext } from './context'
import {useHistory} from 'react-router-dom'

const Subtotal = () => {

    const {cart,totalAmount} = useGlobalContext()
    const history = useHistory()

    return (
        <div className='subtotal'>
            <p>
                Subtotal ({cart.length} items): <strong>Rs. {totalAmount}</strong>
            </p>
            <small className='subtotal-gift'>
                <input type='checkbox'></input>This order contains gift
            </small>
            <button onClick={()=>{history.push('/payment')}}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
