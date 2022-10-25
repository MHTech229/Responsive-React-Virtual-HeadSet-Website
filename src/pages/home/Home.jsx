import { Component } from 'react';
import Home_Header from './Home-Header';
import './home.css'
import Main_Home from './Main-Home';
//import { AnimatePresence } from 'framer-motion';
//import  { motion } from 'framer-motion';

class Home extends Component{
  render(){
      return(
          <>
              <Home_Header/>
              <Main_Home/>

          </>
      )
  }
}
export default Home;