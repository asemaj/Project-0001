import React from "react";
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Payment from "./Payment"

const PUBLIC_KEY = "pk_test_51MlST4C1XZ1d3fP6loO1lqHITMfm7PEFFMNAyQgAlfnyhbuyHmFUYMaasNyMjrzxPBpmv6MUfbozWOGLwgKqkHEm0009fnyROQ"

const stripeTestPromise = loadStripe(PUBLIC_KEY)


export default function StripeForm(){

    return(
        <Elements stripe={stripeTestPromise}>
            <Payment/>
        </Elements>

    );
}
