import { Component } from 'react';
import './products.css';
import left_picture1 from '../../images/HeadSet3.png';
import left_picture2 from '../../images/HeadSet6.png';
import right_picture1 from '../../images/HeadSet12.png';
import right_picture2 from '../../images/HeadSet11.png';
import middle_picture from '../../images/HeadSet26.png';
import { motion } from 'framer-motion';

class Products_Categories extends Component{
  render(){
      return(
        <div className='main-categories'>
          <div className="heading">
              <h2>@MHTech229 VR Glasses</h2>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quia rem, reprehenderit, quas quod ipsum repellat vitae et magnam tempora beatae enim.
              </p>
          </div>
          <div className="main-products">
                <div className="main-products-container">
                      <div className="left">
                        <motion.div className="left-firts-category"
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
                            delay: 2
                        }}>
                              <img src={left_picture1} alt="" />
                          </motion.div>
                          <motion.div className="left-second-category"
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
                            <img src={left_picture2} alt="" />
                          </motion.div>
                      </div>
                      <div className="middle">
                            <motion.div className="middle-category"
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
                                <img src={middle_picture} alt="" />
                            </motion.div>
                      </div>
                      <div className="right">
                          <motion.div className="right-firts-category"
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
                              }}>
                            <img src={right_picture1} alt="" />
                          </motion.div>
                          <motion.div className="right-second-category"
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
                              }}>
                            <img src={right_picture2} alt="" />
                          </motion.div>
                      </div>
                </div>
          </div>
        </div>
      )
  }
}
export default Products_Categories;