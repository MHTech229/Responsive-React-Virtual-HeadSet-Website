import { Component } from 'react';
import './signup.css';
import  { motion } from 'framer-motion';
import signUpPicture from '../../images/registration2.png';
import { FaPencilAlt } from "react-icons/fa";
import Form_Wrapper from '../../components/Form-Wrapper';

class SignUp extends Component{
    render(){
        return(
            <>
                <Form_Wrapper/>
                <main>
                    <section className="signUpSection">
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
                    >REGISTRATION</motion.h1>
                    <div className="signUp-container">
                    <motion.div id="signUpImg"
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
                        <img src={signUpPicture} alt="" />
                    </motion.div>
                    <div id="signUpForm">
                        <form action="" method="post">
                            <motion.input type="text" name="Pseudo" id="Pseudo" placeholder="Your Pseudo"
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
                            <motion.input type="password" name="Password" id="Password" placeholder="Your Password"
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
                            <motion.input type="password" name="ConfPassword" id="ConfPassword" placeholder="Confirm Your Password"
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
                                duration: 1.5,
                                delay: 5.5
                            }}>
                        <FaPencilAlt/> Submit</motion.button>
                        </form>
                    </div>
                </div>
                </section>
            </main>
            </> 
        );
    }
}
export default SignUp;