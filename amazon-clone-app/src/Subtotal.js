import React from 'react'
import './Subtotal.css'
import { useGlobalContext } from './context'

const Subtotal = () => {

    const {cart,totalAmount} = useGlobalContext()

    return (
        <div className='subtotal'>
            <p>
                Subtotal ({cart.length} items): <strong>Rs. {totalAmount}</strong>
            </p>
            <small className='subtotal-gift'>
                <input type='checkbox'></input>This order contains gift
            </small>
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
