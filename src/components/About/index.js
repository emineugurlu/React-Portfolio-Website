import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15} 
                    />
                </h1>
                <p> 
                Hello! I'm a passionate web developer with a love for coding and technology. 
                I enjoy learning new tools and frameworks, and applying them in projects to build dynamic, user-friendly applications. 
                Every day, I strive to improve my skills and produce high-quality work.
                </p>
  
                <p>
                Currently, I'm focusing on frontend development, particularly with JavaScript, React, and Vue.js. 
                I also have a strong foundation in UI/UX design and strive to create clean, intuitive user interfaces. 
                Developing web applications that simplify users' lives is what excites me the most.
                </p>
  
                <p>
                As a developer, my goal is to always deliver high-quality software and designs with a solution-oriented approach. 
                I am a strong team player with excellent analytical thinking skills, and I aim to add value to every project I work on. 
                I am committed to continuous learning and growing as a developer.
                </p>
            </div>
            <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faAngular}color='#DD0031'></FontAwesomeIcon>
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5}color='#F06529'></FontAwesomeIcon>
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3}color='#28A4D9'></FontAwesomeIcon>
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact}color='#5ED4F4'></FontAwesomeIcon>
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare}color='#EFD81D'></FontAwesomeIcon>
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt}color='#EC4'></FontAwesomeIcon>
                </div>
            </div>

            </div>
        </div>
        <Loader type="pacman" ></Loader>
        </>
    );
};

export default About;
