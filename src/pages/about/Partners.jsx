import { Component } from 'react';
import './about.css'
import { Link } from 'react-router-dom';
//import { AnimatePresence } from 'framer-motion';
import  { motion } from 'framer-motion';
import Partner1 from '../../images/Partner1.png';
import Partner2 from '../../images/Partner2.png';
import Partner3 from '../../images/Partner3.png';
import Partner4 from '../../images/Partner4.png';
import Partner5 from '../../images/Partner5.png';

class Partners extends Component{
  render(){
      return(
        <section id="Partners-Section">
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
                >Our Partners</motion.h2>
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
                >We have Many Partners</motion.h4>
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
            <div className="Partners-container">
                <motion.div 
                    className="Partner"
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
                      <img src={Partner1} alt="" />
                </motion.div>
                <motion.div
                     className="Partner"
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
                      <img src={Partner2} alt="" />
                </motion.div>
                <motion.div 
                    className="Partner"
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
                      <img src={Partner3} alt="" />
                </motion.div>
                <motion.div 
                    className="Partner"
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
                      <img src={Partner4} alt="" />
                </motion.div>
                <motion.div
                    className="Partner"
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
                      <img src={Partner5} alt="" />
                </motion.div>
            </div>
        </section>
      )
  }
}
export default Partners;