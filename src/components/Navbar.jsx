import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../images/Logo.png';
import { links } from '../data';
import  { motion } from 'framer-motion';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineClose } from 'react-icons/md';

import './navbar.css';

const Navbar = ({cartItems}) => {
    const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
        <div className="container nav__container">
                <motion.div  
                    className='logo'  
                    initial={{
                        opacity: 0,
                        scale: 0.2
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    exit={{
                       scale: 1
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 2
                    }}
                    onClick={() => setIsNavShowing(false)}
                >
                    <Link to="/">
                        <img src={Logo} alt=""/>
                    </Link>
                </motion.div>
                <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                    {
                        links.map(
                            ({name,path,className}, index)=>{
                                return(
                                    <motion.li key={index}
                                    initial={{
                                        translateY: -80
                                    }}
                                    animate={{
                                        translateY: 0
                                    }}
                                    exit={{
                                        translateY: 0
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        delay: 2
                                    }}>
                                        <NavLink to={path} className={className}  onClick={()=>{setIsNavShowing(prev => !prev)}}>{name}</NavLink>
                                    </motion.li>
                                )
                            }
                        )
                    }
                </ul>
                <motion.button 
                    initial={{
                        opacity: 0,
                        scale: 0.2
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    exit={{
                        scale: 1
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 2
                    }}
                    type='button' 
                    className='shoppingCart-Btn'
                    onClick={() => setIsNavShowing(false)}
                >
                        <Link to='/shoppingcart'>
                            <AiOutlineShoppingCart/>
                            <span className='Counter'>{cartItems.length}</span>
                        </Link>
                </motion.button>
                <button type='button' className='nav__toggle-btn' onClick={()=>{setIsNavShowing(prev => !prev)}}>
                        {
                            isNavShowing ?  <MdOutlineClose/> : <AiOutlineMenu/>
                        }
                </button>
        </div>
    </nav>
  )
}

export default Navbar;