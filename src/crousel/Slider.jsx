import React, { useState, useEffect } from 'react'
import{ArrowBigLeft, ArrowBigRight, Circle, CircleDot} from "lucide-react"
import "./slider.css"

export default function Slider({imgProp}) {
  const [imgIndex, setImgIndex] = useState(0)

  const PrevImg = () =>{
  setImgIndex(index =>(
    index === 0 ? imgProp.length -1 : index -1
  ))
}
  const NextImg = () =>{
    setImgIndex(index =>(
       index === imgProp.length-1 ?  0 : index + 1
    ))

  }

//   useEffect(() => {
//     let timer = setTimeout(() => {
//       setImgIndex((imgIndex) => (imgIndex + 1) % imgProp.length);   
//     }, 3000);

//     return () => {
//       clearTimeout(timer);
//     };
// }, [imgIndex , imgProp]);

  return (
    <div 
    style={{width: "100%", 
    height:"100%", 
    position:"relative"
    }}>
      <div 
      style={{width: "100%", 
      height:"100%", 
      display: "flex", 
      border: "3px solid red",
      overflow:"hidden"
      }}>
        {imgProp.map( url =>(
          <img key={url} src={url} className='img-slider' 
          style={{translate: `${-100 * imgIndex}%`}}
          />
        ))}
      </div>

      <button className='img-slider-btn' style={{left : 0 }} onClick={PrevImg}><ArrowBigLeft /></button>
      <button className='img-slider-btn' style={{right : 0}}onClick={NextImg}><ArrowBigRight/></button>
      <div style={{ 
        position:"absolute",
         bottom: ".5rem",
         left : "50%",
         translate: "-50%",
         display:"flex",
         gap:".25rem"

         }}>
        {imgProp.map((_,index)=>(
          <button key={index} className="img-slider-dot-btn" onClick={()=> setImgIndex(index)}>{index === imgIndex ? <CircleDot style={{scale: "1.2"}} /> : <Circle />}</button>
        ))}
      </div>


     
    </div>
  )
}
