import React,{useContext} from "react"
import PropTypes from 'prop-types'
import {Context} from "../Context"
import {useHover} from "../hooks/useHover"


export function Image({className,img}){
    const {toggleFavorite,addToCart,cartItems,removeFormCart}=useContext(Context)
    //const [isHovered,setIsHovered]=useState(false)
    const [hovered, ref] = useHover()
  const heartIcon=()=>{
      if(img.isFavorite){
          return <i className="ri-heart-fill favorite" onClick={()=>toggleFavorite(img.id)}></i>
      }else if(hovered){
          return <i className="ri-heart-line favorite" onClick={()=>toggleFavorite(img.id)}></i>
      }
  } 
  const cartIcon=()=>{
      const alreadyInCart=cartItems.some(item => item.id===img.id)
      if(alreadyInCart){
          return <i className="ri-shopping-cart-fill cart"  onClick={()=>removeFormCart(img.id)}></i>
      }else if(hovered){
        return <i className="ri-add-circle-line cart" onClick={()=>addToCart(img)}></i>
      }
  }  
    return(
        <div 
        className={`${className} image-container`}
        ref={ref}>
       <img src={img.url} className="image-grid" />
       {heartIcon()}
       {cartIcon()}
        </div>
    )



}
Image.prototype={
    img:PropTypes.shape({
       id: PropTypes.string.isRequired,
        url:PropTypes.string.isRequired,
        isFavorite:PropTypes.bool
    }),
    className:PropTypes.string
}