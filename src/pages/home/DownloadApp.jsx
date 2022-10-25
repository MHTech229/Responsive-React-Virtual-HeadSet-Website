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
import GoogleBtn from '../../images/googlebtn1.png';
import AppBtn from '../../images/AppBtn.png';
import Phone_App from '../../images/HeadSet1.png';

class DownloadApp extends Component{
  render(){
      return(
        <section id="DownloadApp-Section">
            <div className="Container-App-Download">
                <div className="Download-text">
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
                                delay: 6.5
                            }}
                        >Download Our App</motion.h2>
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
                                delay: 7
                            }}
                        >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi eos maiores recusandae repudiandae, natus laudantium a earum distinctio deserunt possimus cum dignissimos. Aut ipsam officiis sed perferendis adipisci minima et.
                        </motion.p>
                        <div className="Download-Btns">
                                <motion.button type='button' id="PlayStore"
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
                                    delay: 7.5
                                }}>
                                    <a href="#">
                                        <img src={GoogleBtn} alt="" />
                                    </a>
                                </motion.button>
                                <motion.button type='button' id="AppStore"
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
                                    delay: 8
                                }}>
                                    <a href="#">
                                        <img src={AppBtn} alt="" />
                                    </a>
                                </motion.button>
                        </div>
                </div>
                <motion.div className="Download-image"
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
                        delay: 8.5
                    }}>
                        <img src={Phone_App} alt="" />
                </motion.div>
            </div>
        </section>
      )
  }
}
export default DownloadApp;