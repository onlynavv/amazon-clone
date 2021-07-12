import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { useGlobalContext } from './context'

const Checkout = () => {

    const {cart} = useGlobalContext()

    return (
        <div className='checkout'>
            <div className="checkout-left">
                <img className='checkout-ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Monitors/Co-op/LG/LG_June_1500x300.jpg' alt=''></img>
                <div>
                    <h2 className="checkout-title">
                        Your Shopping Basket
                    </h2>
                    {cart.map((item)=>{
                        return(
                            <CheckoutProduct key={item.id} {...item} />
                        )
                    })}
                </div>
            </div>
            <div className="checkout-right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
