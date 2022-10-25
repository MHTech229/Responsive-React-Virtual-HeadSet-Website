import { Component } from 'react';
import './about.css'
import Partners from './Partners';
import Services from './Services';
//import { AnimatePresence } from 'framer-motion';

class Main_About extends Component{
  render(){
      return(
        <main id="About-Main">
            <div className="main-About-container">
                <Services/>
                <Partners/>
            </div>
        </main>
      )
  }
}
export default Main_About;