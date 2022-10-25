import { Component } from 'react';
import './home.css'
import { Link } from 'react-router-dom';
//import { AnimatePresence } from 'framer-motion';
import  { motion } from 'framer-motion';
import { BsFillCloudLightningFill } from 'react-icons/bs';
import { BsFillCloudSunFill } from 'react-icons/bs';
import { MdConnectedTv } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';

import Feature_image from '../../images/HeadSet39.png';

class Features extends Component{
  render(){
      return(
        <section id="Features-Section">
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
                        delay: 2.5
                    }}
                >Our Headset's Features</motion.h2>
                <motion.p 
                    id="features-paragraph"
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
                        delay: 3
                    }}

                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quam amet iste? Vero dolores consequuntur repudiandae, exercitationem architecto nostrum illo nam sequi fugit, eos debitis! Iste suscipit dolorem id alias?
                </motion.p>
            </div>
            <div className="Features-Container">
               
                <div className="Features-Cards">
                        <motion.div 
                            className="feature-card"
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
                                <div className="feature-icon">
                                    <BsFillCloudLightningFill/>
                                </div>
                                <h3 className='feature-card-title'>Water Resist</h3>
                                <p className='feature-card-desc'>
                                    Lorem ipsum dolor.
                                </p>
                        </motion.div>
                        <motion.div 
                            className="feature-card"
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
                                <div className="feature-icon">
                                    <BsFillCloudSunFill/>
                                </div>
                                <h3 className='feature-card-title'>UV Resistance</h3>
                                <p className='feature-card-desc'>
                                    Lorem ipsum dolor.
                                </p>
                        </motion.div>
                        <motion.div 
                            className="feature-card"
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
                                <div className="feature-icon">
                                    <FaLock/>
                                </div>
                                <h3 className='feature-card-title'>Auth</h3>
                                <p className='feature-card-desc'>
                                    Lorem ipsum dolor.
                                </p>
                        </motion.div>
                        <motion.div 
                            className="feature-card"
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
                                <div className="feature-icon">
                                    <MdConnectedTv/>
                                </div>
                                <h3 className='feature-card-title'>Connection</h3>
                                <p className='feature-card-desc'>
                                    Lorem ipsum dolor.
                                </p>
                        </motion.div>
                </div>
                <motion.div 
                    className="Feature-Picture"
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
                    }}
                >
                    <img src={Feature_image} alt="" />
                </motion.div>
            </div>
        </section>
      )
  }
}
export default Features;