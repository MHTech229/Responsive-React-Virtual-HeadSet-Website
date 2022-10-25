import { Component } from 'react';
import './Forgotten-Password.css';
import SignInPicture from '../../images/password2.png';

//import { AnimatePresence } from 'framer-motion';
import  { motion } from 'framer-motion';
import Form_Wrapper from '../../components/Form-Wrapper';
import { FaLock } from 'react-icons/fa';
class Forgotten_Password extends Component{
    render(){
        return(
            <>
                <Form_Wrapper/>
                <section className="Forgotten-PasswordSection">
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
                    }}>Reset Your Password</motion.h1>
                    <div className="Forgotten-Password-container">
                    <motion.div 
                        id="Forgotten-PasswordImg"
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
                        <img src={SignInPicture} alt="" />
                    </motion.div>
                    <div id="Forgotten-PasswordForm">
                        <form action="" method="post">
                            <motion.input type="password" name="NewPwd" id="NewPwd" placeholder="Your New Password"
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
                            <motion.input type="password" name="ConfirmPassword" id="ConfirmPassword" placeholder="Confirm Your Password"
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
                                delay: 3.5
                            }}/>
                            <motion.button type="submit"
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
                                duration: 2,
                                delay: 5
                            }}>

                            <FaLock/>   Reset Password</motion.button>
                        </form>
                    </div>
                </div>
            </section>
       </>
        )
    }
}
export default Forgotten_Password;