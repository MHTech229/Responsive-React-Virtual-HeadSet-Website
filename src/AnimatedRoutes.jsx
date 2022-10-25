import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Products from './pages/products/Products';
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notFound/NotFound'
import Forgotten_Password from './pages/Forgotten-Password/Forgotten-Password';



function AnimatedRoutes ({productItems , cartItems , handleAddProduct , handleRemoveProduct, handleCartClear}){
    const location = useLocation();
    return(
        <AnimatePresence exitBeforeEnter>
                <Routes key={location.pathname} location={location}>
                    <Route index element={<Home/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='contact' element={<Contact/>}/>
                    <Route path='signin' element={<SignIn/>}/>
                    <Route path='products' element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>}/>
                    <Route path='signup' element={<SignUp/>}/>
                    <Route path='shoppingcart' element={<ShoppingCart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear}/>}/>
                    <Route path='reset-password' element={<Forgotten_Password/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;