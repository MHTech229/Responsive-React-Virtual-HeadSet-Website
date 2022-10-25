import { Component } from 'react';
import './about.css'
import { Link } from 'react-router-dom';
//import { AnimatePresence } from 'framer-motion';
import  { motion } from 'framer-motion';
import { FaHeadset } from 'react-icons/fa';
import { FaHandsHelping } from 'react-icons/fa';
import { MdOutlineSettings } from 'react-icons/md';
import { MdSettingsSystemDaydream } from 'react-icons/md';
import { SiWebmoney } from 'react-icons/si';


class Services extends Component{
  render(){
      return(
        <section id="Services-Section">
            <div className="heading">
                <motion.h2
                initial={{
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    opacity: 1,
                    scale: 1
                }}
                exit={{
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                >Our Services</motion.h2>
                <motion.h4
                 initial={{
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    opacity: 1,
                    scale: 1
                }}
                exit={{
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                    delay: 1
                }}
                >We provide the best quality of service</motion.h4>
                <motion.p
                     initial={{
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    exit={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 2
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quis eveniet mollitia magni quo temporibus.
                </motion.p>
            </div>
            <div className="services-container">
                <motion.div 
                    className="service"
                    initial={{
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    exit={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 3
                    }}
                >
                    <div className="service-icon">
                            <FaHeadset/>
                    </div>
                    <h3>Help Services</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <button type='button' className='ReadmoreBtn'>
                        <Link to='/readmore'>Read More</Link>
                    </button>
                </motion.div>
                <motion.div 
                    className="service"
                    initial={{
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    exit={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 3.5
                    }}
                >
                    <div className="service-icon">
                            <FaHandsHelping/>
                    </div>
                    <h3>IT Collaboration</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <button type='button' className='ReadmoreBtn'>
                        <Link to='/readmore'>Read More</Link>
                    </button>
                </motion.div>
                <motion.div 
                    className="service"
                    initial={{
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    exit={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 4
                    }}
                >
                    <div className="service-icon">
                            <MdOutlineSettings/>
                    </div>
                    <h3>Material Setting</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <button type='button' className='ReadmoreBtn'>
                        <Link to='/readmore'>Read More</Link>
                    </button>
                </motion.div>
                <motion.div 
                    className="service"
                    initial={{
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    exit={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 4.5
                    }}
                >
                    <div className="service-icon">
                            <MdSettingsSystemDaydream/>
                    </div>
                    <h3>Software Setting</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <button type='button' className='ReadmoreBtn'>
                        <Link to='/readmore'>Read More</Link>
                    </button>
                </motion.div>
                <motion.div 
                    className="service"
                    initial={{
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    exit={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 5
                    }}
                >
                    <div className="service-icon">
                            <SiWebmoney/>
                    </div>
                    <h3>Online Money</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <button type='button' className='ReadmoreBtn'>
                        <Link to='/readmore'>Read More</Link>
                    </button>
                </motion.div>
            </div>
        </section>
      )
  }
}
export default Services;