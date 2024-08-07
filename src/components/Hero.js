import React from 'react'
import './HeroStyles.css'
import darkarrow from '../assests/dark-arrow.png'

export default function Hero() {
  return (
    <div className='hero container'>
      <div className="herotext">
        <h1>We ensure better education of a better world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aut qui repudiandae velit earum quas debitis quia fugiat labore! Recusandae rerum earum vitae quam suscipit aliquam maxime ducimus, sapiente tenetur cum nemo pariatur maiores quas.</p>
        <button className='btn'>Explore More <img src={darkarrow} alt="" /></button>
      </div>
    </div>
  )
}
