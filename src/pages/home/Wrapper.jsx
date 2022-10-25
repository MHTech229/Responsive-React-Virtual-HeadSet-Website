import { Component } from 'react';
import './home.css'
import { Link } from 'react-router-dom';
//import { AnimatePresence } from 'framer-motion';
import  { motion } from 'framer-motion';

class Wrapper extends Component{
  render(){
      return(
        <div id="Home-Wrapper">
                <motion.div className='mini-wrapper'
                    initial={{
                        height: 650
                    }}
                    animate={{
                        height: 0
                    }}
                    exit={{
                        height: 0
                    }}
                    transition={{
                        duration: 1.5
                    }}
                ></motion.div>

                <motion.div className='mini-wrapper'
                    initial={{
                        height: 650
                    }}
                    animate={{
                        height: 0
                    }}
                    exit={{
                        height: 0
                    }}
                    transition={{
                        duration: 1.5,
                        delay: .2
                    }}
                ></motion.div>
                <motion.div className='mini-wrapper'
                    initial={{
                        height: 650
                    }}
                    animate={{
                        height: 0
                    }}
                    exit={{
                        height: 0
                    }}
                    transition={{
                        duration: 1.5,
                        delay: .6
                    }}
                ></motion.div>
                <motion.div className='mini-wrapper'
                    initial={{
                        height: 650
                    }}
                    animate={{
                        height: 0
                    }}
                    exit={{
                        height: 0
                    }}
                    transition={{
                        duration: 1.5,
                        delay: .8
                    }}
                ></motion.div>
                <motion.div className='mini-wrapper'
                    initial={{
                        height: 650
                    }}
                    animate={{
                        height: 0
                    }}
                    exit={{
                        height: 0
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 1
                    }}
                ></motion.div>
        </div>
      )
  }
}
export default Wrapper;