import React from 'react'

const NationalParkPage = () => {
    return (
        <>
            <div className='header'>
                <h1>National Park Trip Planner</h1>
                <h4>Written 11/24 with EJS, CSS, Javascript, MongoDB and Node.</h4>
            </div>
            <div className='project-container'>
                <a href='https://national-park-trip-planner-46d300a02e57.herokuapp.com/'>
                    <img src='../nationalparkplanner.png' alt='npp' style={{ width: '700px', height: 'auto' }} />
                </a>
                <h4>Explore America's National Parks and plan your trip!</h4>
                <h4>Click the image above to view the app!</h4>
                <a href='https://github.com/TGadaleta/NationalParkPlanner'>Github Repository</a>
            </div>
        </>
    )
    }

export default NationalParkPage