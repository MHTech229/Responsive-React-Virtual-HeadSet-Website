import { Component } from 'react';
import  './notFound.css'
//import { AnimatePresence } from 'framer-motion';
import  { motion } from 'framer-motion';
import  Error from '../../images/404.png';

class NotFound extends Component{
  render(){
      return(
          <section id="NotFound-Section">
              <motion.div 
                className='NotFound'
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
                    duration: 2,
                    delay: 2
                }}
             >
              <img src={Error} alt="" />
             </motion.div>
          </section>
      )
  }
}
export default NotFound;