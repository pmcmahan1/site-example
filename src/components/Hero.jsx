import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <h1>Hero Header</h1>
            <h2>Hero Subtitle</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis dignissimos accusamus temporibus deserunt cumque sed sunt laborum? Nostrum unde fuga distinctio quod sunt fugiat minus molestiae et voluptate, asperiores corporis?</p>
        </div>
        <div className="hero-img">
            <img src="https://dummyimage.com/550/29282d/ffffff.jpg&text=Your+img+here." alt="" />
        </div>
    </div>
  )
}

export default Hero