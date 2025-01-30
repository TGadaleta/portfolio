import React from 'react'
import '../styling/styles.css'

const GameCupidPage = () => {
    return (
        <>
            <div className='header'>
                <h1>Game Cupid</h1>
                <h4>Written 1/25 with React, CSS, Javascript, Django and Python.</h4>
            </div>
            <div className='project-container'>
                <a href='https://gamecupid.netlify.app/' target='_blank' rel='noopener noreferrer'>
                    <img src='../gamecupid.png' alt='gamecupid' style={{ width: '700px', height: 'auto' }} />
                </a>
                <h4>Meet and match with others based on your favorite video games.</h4>
                <h4>Click the image above to view the app!</h4>
                <a href='https://github.com/TGadaleta/GameCupid-React' target='_blank' rel='noopener noreferrer'>Github Repository</a>
            </div>
        </>
    )
    }

export default GameCupidPage