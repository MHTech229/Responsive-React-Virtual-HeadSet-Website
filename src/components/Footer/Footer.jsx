import { Component } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../images/Logo.png';
import { ImLocation2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import './footer.css';
import { links } from '../../data';

class Footer extends Component{
    render(){
        return(
            <footer>
                <div className='Footer-title'>Our Newsletters</div>
                <div className='Suscribe-Form'>
                        <form action="#" method='post'>
                            <input type="email" className='Suscriber-Email' id='Suscriber-Email'/>
                            <button type='submit' id='Suscribe-submit'>
                                Suscribe
                            </button>
                        </form>
                </div>
                <div className='Quick-Links'>
                        <div id="logo">
                            <img src={Logo} alt="" />
                        </div>
                        <div className='Some-Links'>
                            <ul>
                                <li>
                                    <Link to='/location'>Location</Link>
                                </li>
                                <li>
                                    <Link to='/blog'>Our Blog</Link>
                                </li>
                                <li>
                                    <Link to='/faq'>FAQ</Link>
                                </li>
                                <li>
                                    <Link to='/help'>Help</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                </div>
                <div className='Socials-Links'>
                            <ul>
                                <li>
                                   <a href="https://www.instagram.com/mehintoangemarie/"><BsInstagram/></a>
                                </li>
                                <li>
                                    
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/mwlite/in/ange-marie-charbel-mehinto"><BsLinkedin/></a>
                                </li>
                                <li>
                                    <a href="https://mobile.twitter.com/MehintoAnge"><BsTwitter/></a>
                                </li>
                                <li>
                                    <a href="https://wa.me/+22952033108?text="><BsWhatsapp/></a>
                                </li>
                            </ul>
                </div>
                <div id="CopyRight">
                    Created By <span><a href="https://wa.me/+22952033108?text=">  MEHINTO Charbel</a></span>
                </div>
            </footer>
        )
    }
}
export default Footer;