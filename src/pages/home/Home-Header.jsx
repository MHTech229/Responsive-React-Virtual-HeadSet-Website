import { Component } from 'react';
import './home.css'
import { Link } from 'react-router-dom';
import HeaderSet_Main_Picture from '../../images/HeadSet11.png';
import Wrapper from './Wrapper';
//import { AnimatePresence } from 'framer-motion';
import  { motion } from 'framer-motion';

class Home_Header extends Component{
  render(){
      return(
          <header id="Home-Header">
                <Wrapper/>
                <div className="Home-Header-Container">
                    <div className='Home-Header-Presentation'>
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
                                @MHTech229 VIRTUAL REALITY GLASSES
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
                                id="Home-Header-Btns"
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
                                <button type='button' id='StartedBtn'>
                                    <Link to='/'>Get Started</Link>
                                </button>
                                <button type='button' id='SourceBtn'>
                                    <a href="https://github.com/MHTech229/">Source Code</a>
                                </button>
                            </motion.div>
                    </div>
                    <motion.div 
                    className='Home-Header-Picture'
                    initial={{
                        translateY: -500
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
                    }}
                    >
                            <img src={HeaderSet_Main_Picture} alt="" />
                    </motion.div>
                </div>
          </header>
      )
  }
}
export default Home_Header;