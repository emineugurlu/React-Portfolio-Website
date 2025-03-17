import { Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-e.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="emine" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="_blank" rel='norefrrer' href='https://www.linkedin.com/in/emine-ugurlu/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>

            <li>
                <a target="_blank" rel='norefrrer' href='https://github.com/emineugurlu'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>

            <li>
                <a target="_blank" rel='norefrrer' href='https://medium.com/@emineugurlu957'>
                    <FontAwesomeIcon icon={faMedium} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>

            <li>
                <a target="_blank" rel='norefrrer' href='https://www.instagram.com/emine__ugurlu__/'>
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
            
        </ul>
    </div>
)

export default Sidebar
