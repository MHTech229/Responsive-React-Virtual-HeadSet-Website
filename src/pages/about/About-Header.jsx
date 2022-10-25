import { Component } from 'react';
import './about.css'
import { Link } from 'react-router-dom';
import HeaderSet_Main_Picture from '../../images/HeadSet16.png';
import Wrapper from '../home/Wrapper';
//import { AnimatePresence } from 'framer-motion';
import  { motion } from 'framer-motion';

class About_Header extends Component{
  render(){
      return(
          <header id="About-Header">
                <Wrapper/>
                <div className="About-Header-Container">
                    <div className='About-Header-Presentation'>
                            <motion.h1
                            initial={{
                                translateX: -600
                            }}
                            animate={{
                                translateX: 0
                            }}
                            exit={{
                                translateX: 0
                            }}
                            transition={{
                                duration: 2,
                                delay: 2
                            }}
                            >
                             About  @MHTech229
                            </motion.h1>
                            <motion.p
                            initial={{
                                translateX: -600
                            }}
                            animate={{
                                translateX: 0
                            }}
                            exit={{
                                translateX: 0
                            }}
                            transition={{
                                duration: 2,
                                delay: 2
                            }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci, corporis quis nihil.
                            </motion.p>
                            <motion.div 
                                id="About-Header-Btns"
                                initial={{
                                    translateY: 200
                                }}
                                animate={{
                                    translateY: 0
                                }}
                                exit={{
                                    translateY: 0
                                }}
                                transition={{
                                    duration: 2,
                                    delay: 2
                                }}>
                                <button type='button' id='ContactBtn'>
                                    <Link to='/contact'>Contact Us</Link>
                                </button>
                                <button type='button' id='EmailBtn'>
                                    <a href="mailto:mehintocharbel@gmail.com">Email Us</a>
                                </button>
                            </motion.div>
                    </div>
                    <motion.div 
                    className='About-Header-Picture'
                    initial={{
                        translateX: 700
                    }}
                    animate={{
                        translateX: 0
                    }}
                    exit={{
                        translateX: 0
                    }}
                    transition={{
                        duration: 2.5,
                        delay: 2
                    }}
                    >
                            <img src={HeaderSet_Main_Picture} alt="" />
                    </motion.div>
                </div>
          </header>
      )
  }
}
export default About_Header;