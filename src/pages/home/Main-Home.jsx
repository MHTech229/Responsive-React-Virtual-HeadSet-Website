import { Component } from 'react';
import './home.css'
import { Link } from 'react-router-dom';
//import { AnimatePresence } from 'framer-motion';
import  { motion } from 'framer-motion';
import Technologies_Section from './Technologies-Section';
import Features from './Features';
import DownloadApp from './DownloadApp';

class Main_Home extends Component{
  render(){
      return(
        <main id="Home-Main">
            <div className="main-Home-container">
                <Technologies_Section/>
                <Features/>
                <DownloadApp/>
            </div>
        </main>
      )
  }
}
export default Main_Home;