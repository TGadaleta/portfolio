import React from 'react'
import '../styling/styles.css'

const ContactPage = () => {
    return (
        <>
            <div className='header'>
                <h1>Tony Gadaleta</h1>
                <h4>Web Developer and Game Designer</h4>
                <h4>Based in New York City</h4>
                <a href="mailto:anthonygadaleta@gmail.com?subject=Let's Connect&body=Hi Tony, I found your portfolio and wanted to reach out!">
                Contact Me
            </a>
            </div>
            <div className='bio-container'>
                                <p>Hey, I’m Tony Gadaleta.
I’ve been into computers for as long as I can remember. I was lucky enough to have one at home when I was six, and some of my earliest memories involve launching games through DOS, tinkering with command lines, and figuring out how things worked under the hood. That curiosity never faded—it just evolved into a passion for building, coding, and creating interactive experiences.

These days, I focus on web development and game design, with a strong love for React and backend systems. I enjoy working on projects that blend technology and storytelling, like my text-based adventure game, Surviving the Dark Planet.

I’m currently open to opportunities, whether it’s collaborating on something new or taking on exciting challenges. If you’re working on something interesting, let’s talk!</p>
            </div>
        </>
    )
    }

export default ContactPage