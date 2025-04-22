import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
        const [letterClass, setLetterClass] = useState('text-animate')
        const refFrom = useRef()
        
    
        useEffect(() => {
            setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 3000);
        }, []);

        const sendEmail = (e) => {
            e.preventDefault()
            emailjs
            .sendForm(
                'gmail',
                'service_37luwv9',
                refFrom.current,
                'service_37luwv9'

            )

            .then(
                () => {
                    alert('Message successfully sent! ')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again  ')
                }
            )
        }

    return(
        <>
        <div  className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['c', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                    ></AnimatedLetters>
                </h1>
                
                <p>
                I’m currently available for freelance work — particularly projects that are innovative, ambitious, or make a real impact.  
                If you have an opportunity, a question, or just want to say hello, don’t hesitate to reach out via the form below.  
                Let’s build something great together.
                </p>
                <div className='contact-form'>
                    <form ref={refFrom} onSubmit={sendEmail}></form>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='Name' required ></input>
                        </li>
                        <li className='half'>
                            <input type='email' name='email' placeholder='Email' required ></input>
                        </li>
                        <li>
                            <input placeholder='Subject' type='text' name='subject' required></input>
                        </li>
                        <li>
                            <textarea placeholder='Message' name='message' required></textarea>
                        </li>
                        <li>
                            <input type='submit' className='flat-button' value="SEND"></input>
                        </li>
                    </ul>
                </div>
               

            </div>
        <div className='info-map'>
            Emine Uğurlu,
            <br/>
            İstanbul,
            <br/>
            Turkey <br/>
           <span>ugurlu34emine@gmail</span>

        </div>
        </div>
        <Loader type='pacman'></Loader>
        </>
    )
}

export default Contact