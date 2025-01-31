import React from 'react'
import '../styling/styles.css'

const HomePage = () => {
  return (
    <>
        <div className='home-container'>
            <section className='hero'>
                <div className='hero-content'>
                    <h1 className='hero-title'>Welcome To My Portfolio</h1>
                    <p className='hero-subtitle'>Heya! I'm Tony, a Software Engineer with a passion for learning and teaching.</p>
                    <div className='hero-buttons'>
                        <a href='/projects' className='projects-btn'>View My Portfolio</a>
                        <a href='/about' className='about-btn'>About Me</a>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default HomePage