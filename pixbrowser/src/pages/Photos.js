import React,{useContext} from "react"
import {getClass} from "../utils/index"
import {Image} from "../Component/Image"
import {Context} from "../Context"

export function Photos(){
    const {allPhotos}=useContext(Context)

    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))
    return(
        <main className="photos">
           
           
            {imageElements}
        </main>
    )
}