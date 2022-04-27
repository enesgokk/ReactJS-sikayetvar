import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {useState,useEffect} from "react";
import axios from 'axios';

const Pay = () => {

    const [stripeToken, setStripeToken]=useState(null)

    const onToken=(token)=>{
        setStripeToken(token)
    }

    useEffect(()=>{
        const stripeReq= async()=>{
            try {
                const res= await axios.post(
                    "http://localhost:5000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount:2000
                    }
                );
                console.log(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        stripeToken && stripeReq();
    },[stripeToken])
    
  return (
    <div>
        <StripeCheckout
            name="Enes Shop"
            image='https://avatars.githubusercontent.com/u/1486366?=4'
            billingAddress
            shippingAddress
            description='Your total is $20'
            amount={2000}
            token={onToken}
            stripeKey={process.env.KEY}
        >
            <button>Pay</button>
        </StripeCheckout>
    </div>
  )
}

export default Pay