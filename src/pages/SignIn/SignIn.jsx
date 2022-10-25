import { Component } from 'react';
import './signin.css';
import SignInPicture from '../../images/login2.png';
import { Link } from 'react-router-dom';

//import { AnimatePresence } from 'framer-motion';
import  { motion } from 'framer-motion';
import Form_Wrapper from '../../components/Form-Wrapper';
import { FaLock } from 'react-icons/fa';
class SignIn extends Component{
    render(){
        return(
            <>
                <Form_Wrapper/>
                <main>
                    <section className="signInSection">
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
                        }}>LOGIN</motion.h1>
                        <div className="signIn-container">
                        <motion.div 
                            id="signInImg"
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
                        <div id="signInForm">
                            <form action="" method="post">
                                <motion.input type="text" name="Pseudo" id="Pseudo" placeholder="Enter Your Pseudo"
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
                                <motion.input type="password" name="SendePassword" id="SendePassword" placeholder="Enter Your Password"
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
                                <motion.span 
                                    className='Forgotten'
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
                                        delay: 4.5
                                    }}
                                >
                                    <Link to='/reset-password'>Did You Forget Your Password ?</Link>
                                </motion.span>
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
                                    duration: 2,
                                    delay: 5
                                }}>

                                <FaLock/> Login</motion.button>
                            </form>
                        </div>
                    </div>
                </section>
        </main>
            </>   
        )
    }
}
export default SignIn;