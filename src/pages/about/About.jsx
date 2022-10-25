import { Component } from 'react';
import About_Header from './About-Header';
import './about.css'
import Main_About from './Main-About';
//import { AnimatePresence } from 'framer-motion';
//import  { motion } from 'framer-motion';

class About extends Component{
  render(){
      return(
          <>
             
          <About_Header/>
          <Main_About/>

          </>
      )
  }
}
export default About;