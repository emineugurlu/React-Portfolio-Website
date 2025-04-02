import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    return (
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
        </div>
    );
};

export default About;
