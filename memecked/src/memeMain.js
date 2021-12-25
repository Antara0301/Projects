
import React,{useState} from "react"
import "./memeMain.css";
import memesData from "./memeData";

export default function MemeMain(){
    const meme={
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"

    }
    
const [memeImage,setMemeImage]=useState(meme)
const [allMemeImage,setAllMemeImage]=useState(memesData)  

function clickHandler(){
    const memeArray=memesData.data.memes;
    const randomNumber=Math.floor(Math.random() *  memeArray.length);
    const url=memeArray[randomNumber].url
    setMemeImage(prevmeme =>({
        ...prevmeme,
        randomImage:url
}))

}

function handelChange(e){
    const {name,value}=e.target
    setMemeImage(prev => ({...prev,[name]:value}))
}
 
    return(
        <main>
        <div className="input-Meme">
     
             <input type="text"
             className="form-input"
             placeholder="Top Text"
             name="topText"
             value={memeImage.topText}
             onChange={handelChange}
             />
             <input type="text" 
              className="form-input"
              placeholder="Bottom Text"
              name="bottomText"
              value={memeImage.bottomText}
              onChange={handelChange}
             /><br/>
             <button onClick={clickHandler}>Get A New Image For Meme 🏞️   </button>
    
        </div>
        <div className="meme">
        <img src={memeImage.randomImage} className="meme-image"/>
        <h2 className="meme--text top">{memeImage.topText}</h2>
        <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
        </div>
        </main>
    )
}

