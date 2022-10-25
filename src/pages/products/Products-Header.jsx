import { Component } from 'react';
import './products.css'
import { Link } from 'react-router-dom';
import HeaderSet_Main_Picture from '../../images/HeadSet34.png';
import Wrapper from '../home/Wrapper';
import { FaLaptop } from 'react-icons/fa';
import { FaPhoneSquare } from 'react-icons/fa';
import { FaGamepad } from 'react-icons/fa';
import { FaHeadphonesAlt } from 'react-icons/fa';
import { BsPhoneLandscape } from 'react-icons/bs';

//import { AnimatePresence } from 'framer-motion';
import  { motion } from 'framer-motion';

class Products_Header extends Component{
  render(){
      return(
            <header id="Products-Header">
            <Wrapper/>
            <div className="Products-Header-Container">
                <div className='Products-Header-Presentation'>
                       <div className="Category-Container">
                            <motion.div className='Category'
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
                                delay: 4
                            }}>
                                    <div className="Category-icon">
                                        <FaLaptop/>
                                    </div>
                                    <h2>
                                        PC's Headset
                                    </h2>
                                    <p
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </p>
                            </motion.div>
                            <motion.div className='Category'
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
                                delay: 5
                            }}>
                                    <div className="Category-icon">
                                        <BsPhoneLandscape/>
                                    </div>
                                    <h2>
                                        Smartphone's Headset
                                    </h2>
                                    <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </p>
                            </motion.div>
                            <motion.div className='Category'
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
                                delay: 6
                            }}>
                                    <div className="Category-icon">
                                        <FaGamepad/>
                                    </div>
                                    <h2>
                                        Gaming's Headset
                                    </h2>
                                    <p
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </p>
                            </motion.div>
                            <motion.div className='Category'
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
                                delay: 5.5
                            }}>
                                    <div className="Category-icon">
                                        <FaHeadphonesAlt/>
                                    </div>
                                    <h2>
                                        TV's Headset
                                    </h2>
                                    <p
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </p>
                            </motion.div>
                       </div>
                </div>
                <motion.div 
                className='Products-Header-Picture'
                initial={{
                    opacity: 0,
                    translateX: 300
                }}
                animate={{
                    opacity: 1,
                    translateX: 0
                }}
                exit={{
                    opacity: 1,
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
export default Products_Header;