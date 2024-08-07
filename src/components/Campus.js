import React from 'react'
import "./CampusStyles.css"
import gallery1 from "../assests/gallery-1.png"
import gallery2 from "../assests/gallery-2.png"
import gallery3 from "../assests/gallery-3.png"
import gallery4 from "../assests/gallery-4.png"
import whitearrow from "../assests/white-arrow.png"

export default function Campus() {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
      </div>
      <button className='btn darkbtn'>See more here <img src={whitearrow} alt="" /></button>
    </div>
  )
}
