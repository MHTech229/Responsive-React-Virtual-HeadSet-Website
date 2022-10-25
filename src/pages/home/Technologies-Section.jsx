import { Component } from 'react';
import './home.css'
import { Link } from 'react-router-dom';
//import { AnimatePresence } from 'framer-motion';
import  { motion } from 'framer-motion';
import Techno_image from '../../images/HeadSet27.png';

class Technologies_Section extends Component{
  render(){
      return(
        <section id="Home-Main">
            <div className="Technologies-Container">
                <motion.div 
                    className='Techno-image'
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
                        duration: 1,
                        delay: 2.5
                    }}
                >
                    <div className='Techno-image-container'>
                        <motion.img src={Techno_image} alt="" />
                    </div>
                </motion.div>
                <div className='Techno-text'>
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
                            delay: 3
                        }}
                    >Our Technologies</motion.h2>
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
                            delay: 3.5
                        }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium distinctio iusto inventore officiis numquam ipsa tenetur, neque atque dolores ducimus.
                    </motion.p>
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
                            delay: 4
                        }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium distinctio iusto inventore officiis numquam ipsa tenetur, neque atque dolores ducimus.
                    </motion.p>
                </div>
            </div>
        </section>
      )
  }
}
export default Technologies_Section;