import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Products_Categories from './Products-Categories';
import Products_Header from './Products-Header';
import './products.css';
//import { AnimatePresence } from 'framer-motion';
//import  { motion } from 'framer-motion';

const Products = ({productItems , handleAddProduct}) => {
    return(
        <>
            <Products_Header/>
                <main id="Products-Main">
                    <div className="main-Products-container">
                        <Products_Categories/>
                        <div className='main-Sales'>
                            <h2>Our Products</h2>
                            <div className="sales-container">
                                {
                                    productItems.map((productItem)=>{
                                            return (
                                               <div className={productItem.classname}>
                                                    <div className={productItem.badgeClass}>
                                                        {productItem.badge} %
                                                    </div>
                                                    <div className="sale-image">
                                                        <img src={productItem.defaultPicture} alt="" className='default-image'/>
                                                        <img src={productItem.hoverPicture} alt="" className='hover-image'/>
                                                    </div>
                                                    <div className='sale-name'>
                                                        {productItem.name} 
                                                    </div>
                                                    <div className="sale-price">
                                                        $ {productItem.price}
                                                    </div>
                                                    <div className="sale-buy-button">
                                                        <button type='button' id={`button-${productItem.id}`} 
                                                        onClick={()=>handleAddProduct(productItem)}
                                                        >
                                                            <AiOutlineShoppingCart/> Buy
                                                        </button>
                                                    </div>
                                               </div>
                                            )
                                        }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </main>
        </>
    )
}

export default Products;