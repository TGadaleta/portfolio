import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/styles.css'

const HomePage = () => {
  return (
    <>
        <div className='home-container'>
            <section className='hero'>
                <div className='hero-content'>
                    <h1 className='hero-title'>Welcome To My Portfolio!</h1>
                    <p className='hero-subtitle'>Heya! I'm Tony Gadaleta, a Software Engineer with a passion for learning, teaching, and gaming.</p>
                    <div className='hero-buttons'>
                        <Link to='/contact' className='about-btn'>Contact</Link>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default HomePage