import React,{useContext,useState} from "react"
//import { CartItem } from "../Component/CartItems"
import {Context} from "../Context"
import {CartItems} from "../Component/CartItems"

export function Cart(){
    const [buttonText,setButtonText]=useState("Place Order")
    const {cartItems,emptyCart}=useContext(Context)

const totalCost=5.99*cartItems.length
const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const cartItemElements=cartItems.map(item => (
        <CartItems key={item.id} item={item}/>
    ))

    const placeOrder=()=>{
        setButtonText("Ordering...")
        setTimeout(()=>{
console.log("Order Placed")
setButtonText("Place Order")
emptyCart()
        },3000)
    }
    return(
        
        <main className="cart-page">
           
            <h1>Check out</h1>
            {cartItemElements}
    <p className="total-cost">total:{totalCostDisplay}</p>
            {cartItems.length>0?
                <div className="order-button">
    <button onClick={placeOrder}>{buttonText}</button>
            </div>:
            <p>You do not have any Item</p>}
        </main>
    )
}