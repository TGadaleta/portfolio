import React from 'react'
import '../styling/styles.css'

const BrightMindPage = () => {
    return (
        <>
            <div className='header'>
                <h1>BrightMind</h1>
                <h4>Written 12/24 with React, CSS, Javascript, MongoDB and Node.</h4>
            </div>
            <div className='project-container'>
                <a href='https://brightmind25.netlify.app/' target='_blank' rel='noopener noreferrer'>
                    <img src='../brightmind.png' alt='brightmind' style={{ width: '700px', height: 'auto' }} />
                </a>
                <h4>Sign up for or create your own courses online.</h4>
                <h4>Click the image above to view the app!</h4>
                <a href='https://github.com/TGadaleta/BrightMind-frontend' target='_blank' rel='noopener noreferrer'>Github Repository</a>
            </div>
        </>
    )
    }

export default BrightMindPage