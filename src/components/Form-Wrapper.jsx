import { Component } from 'react';
import { Link } from 'react-router-dom';
//import { AnimatePresence } from 'framer-motion';
import  { delay, motion } from 'framer-motion';
import './Form-Wrapper.css';
class Form_Wrapper extends Component{
  render(){
      return(
        <motion.div 
            id="Form-Wrapper"
            initial={{
                width: 1400
            }}
            animate={{
                width: 0
            }}
            exit={{
                width: 0
            }}
            transition={{
                duration: 1.5,
                delay: 0.7
            }}
            >
               
        </motion.div>
      )
  }
}
export default Form_Wrapper;