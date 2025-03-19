import './index.scss'
import LogoS from '../../../assets/images/logo-e.png'
import {useRef} from 'react'
const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();
    return (
        <div className="logo-container">
            <img className='solid-logo' src={LogoS} alt ="E"></img>
 <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="500px" height="500px" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
<g 
fill="none"
className='svg-container'
transform="translate(100,100) scale(1,-1) rotate(30)"
>
  <path d="M151.5 351.8 c-0.9 -2.3 0 -292.6 0.8 -293.5 0.5 -0.4 3.9 -0.8 7.5 -0.8 5.5 -0.1 6.7 -0.4 7 -1.8 0.3 -1.6 5.3 -1.7 73.3 -1.7 l72.9 0 0 12 c0 10 -0.2 12 -1.5 12 -1.1 0 -1.5 1.2 -1.5 5 l0 5 -52.7 0.2 c-49.7 0.3 -52.8 0.4 -52.5 2.1 0.2 1.5 -0.6 1.7 -5.8 1.7 l-6 0 0 46.5 0 46.5 54 0 54 0 0 11.9 c0 11 -0.1 11.9 -2 12.4 -1.6 0.4 -2 1.4 -2 5.1 l0 4.6 -46.3 0.2 c-43.4 0.3 -46.2 0.4 -45.9 2.1 0.2 1.5 -0.6 1.7 -5.8 1.7 l-6 0 0 48 0 48 60 0 60 0 0 12 c0 10 -0.2 12 -1.5 12 -1.1 0 -1.5 1.2 -1.5 5 l0 5 -79 0 c-62.3 0 -79.2 -0.3 -79.5 -1.2z"/>
 </g>
 
</svg>
        </div>
    )
}

export default Logo