import React,{useState,useEffect} from "react"


const Context=React.createContext()


function ContextProvider(props){
    const [allPhotos,setAllPhotos]=useState([])
    const [cartItems,setCartItems]=useState([])
  

const url="https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

useEffect(()=>{
    fetch(url)
    .then(res=> res.json())
    .then(data =>setAllPhotos(data)

    )

},[])
console.log(allPhotos)
const toggleFavorite=(id)=>{

    const updateArr=allPhotos.map(photo => {
        if(photo.id === id){
            //console.log(id)
            //console.log(!photo.isFavorite)
            return {
            ...photo,isFavorite: !photo.isFavorite
            }
           
        }
        return photo
    })
    setAllPhotos(updateArr)
}
const addToCart=(newItem)=>{
    setCartItems(prevItem=> [...prevItem,newItem])

}

const removeFormCart=(id)=>{
setCartItems(prev => prev.filter(item => item.id !==id))
}
//console.log(cartItems)

const emptyCart=()=>{
    setCartItems([])
}

    return(
        <Context.Provider value= {{allPhotos:allPhotos,toggleFavorite,addToCart,cartItems,removeFormCart,emptyCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}