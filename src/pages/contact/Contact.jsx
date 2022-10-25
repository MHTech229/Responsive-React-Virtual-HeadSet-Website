import { Component } from 'react';
import './contact.css';
//import { AnimatePresence } from 'framer-motion';
import  { motion } from 'framer-motion';
import contactPicture from '../../images/contactImg.jpg';
import { BiPaperPlane } from 'react-icons/bi';
import Form_Wrapper from '../../components/Form-Wrapper';

class Contact extends Component{
  render(){
      return(
        <>
          <Form_Wrapper/>
          <section className="contactSection">
            <motion.h1
              initial={{
                translateY: -20,
                opacity: 0
                }}
                animate={{
                    translateY: 0,
                    opacity: 1
                }}
                exit={{
                    translateY: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 1.5,
                    delay: 1.5
                }}
            >Contact US</motion.h1>
            <div className="contact-container">
              <motion.div 
                id="contactImg"
                initial={{
                  scale: 0.6,
                  opacity: 0
                  }}
                  animate={{
                      scale: 1,
                      opacity: 1
                  }}
                  exit={{
                      scale: 1,
                      opacity: 1
                  }}
                  transition={{
                      duration: 2,
                      delay: 5
                }}
                >
                <img src={contactPicture} alt="" />
              </motion.div>
              <div id="contactForm">
                <form action="" method="post">
                    <motion.input type="text" name="NomSender" id="NomSender" placeholder="Your Name"
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
                      />
                    <motion.input type="email" name="EmailSender" id="EmailSender" placeholder="Your Mail Adresse"
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
                      }}
                    />
                    <motion.textarea name="MessageSend" id="MessageSend" placeholder="Your Message"
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
                          delay: 4.5
                      }}
                    >
                    </motion.textarea>
                    <motion.button type="submit" id="MessageSenderBtn"
                    initial={{
                      opacity: 0,
                      translateY: 20
                      }}
                      animate={{
                          opacity: 1,
                          translateY: 0
                      }}
                      exit={{
                          opacity: 1,
                          translateY: 0
                      }}
                      transition={{
                          duration: 1.5,
                          delay: 5.5
                      }}
                    >
                   <BiPaperPlane/> Send</motion.button>
                </form>
            </div>
          </div>
       </section>
        </>
      )
  }
}
export default Contact;