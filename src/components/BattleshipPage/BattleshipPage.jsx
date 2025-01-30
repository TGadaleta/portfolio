import React from 'react'

const BattleshipPage = () => {
return (
    <>
        <div className='header'>
            <h1>Battleship</h1>
            <h4>Written with HTML, CSS, and Javascript</h4>
        </div>
        <div className='project-container'>
            <a href='https://tony-gadaleta-battleship.netlify.app/'>
                <img src='../battleship.png' alt='battleship' style={{ width: '700px', height: 'auto' }} />
            </a>
            <h4>Face off against the computer and try to sink their ships first!</h4>
            <h4>Click the image above to play the game!</h4>
            <a href='https://github.com/TGadaleta/Battleship'>Github Repository</a>
        </div>
    </>
)
}

export default BattleshipPage