import './shoppingCart.css';
//import { AnimatePresence } from 'framer-motion';
//import  { motion } from 'framer-motion';
import React from 'react';
import { BsTrash } from 'react-icons/bs';
import CardImg from '../../images/Payment_Options.jpg';
import BuyImg from '../../images/buynow.png';
import Form_Wrapper from '../../components/Form-Wrapper';
const ShoppingCart = ({cartItems , handleAddProduct , handleRemoveProduct, handleCartClear}) => {

  const totalPrice = cartItems.reduce(
    (price , item) => price + item.quantity * item.price , 
    0);
  return (
    <>
         <Form_Wrapper/>
         <main id="ShoppingCart-Main">
            <section id="ShoppingCart-Section">
                    <div className="shopping-Cart">
                        <div className="cart-items-header">Your Shopping Cart</div>
                        <div className="clear-cart">
                            {
                                cartItems.length >= 1 && (
                                    <button className='Clear-Cart-Btn' onClick={handleCartClear}><BsTrash />  Clear</button>
                                )
                            }
                        </div>
                        {cartItems.length === 0 && (
                            <div className="cart-items-empty">The Cart is Empty</div>
                        )}
                        <div id='Product-Table'>
                            {
                                cartItems.map((item) =>(
                                    <div key={item.id} className='Shopping-Cart-Line'>
                                        <div className="image-container">
                                            <img src={item.defaultPicture} className='Add-Product-Image'alt="" />
                                        </div>
                                            <div className='Add-Product-Name'>{item.name}</div>
                                            <div className='Add-Product-Function'>
                                                <button className='Add-Product-increase' onClick={() => handleAddProduct(item)}>+</button>
                                                <span>{item.quantity}</span>
                                                <button className='Add-Product-decrease' onClick={() => handleRemoveProduct(item)}>-</button>
                                            </div>
                                            <div className="Add-Product-Price">
                                                $ {item.quantity * item.price}
                                            </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="cart-items-total-price">
                           <span>ToTal Price</span>
                           <span id='total-price'>$ {totalPrice}</span>
                        </div>

                    </div>
                    <div className="checkout-Form">
                        <div className="checkout-header">
                           <h2> Checkout</h2>
                           <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           </p>
                        </div>
                        <div id="card-img-container">
                            <img src={CardImg} alt="" id="card-img"/>
                        </div>
                        <div className="form-container">
                        <form action="#" method='post'>
                            <input type="email" name='UserEmail' id='UserEmail' placeholder='Your Mail Adress'/>
                            <input type="text" name="CardNumber" id="CardNumber" placeholder='Card Number'/>
                            <div className="details">
                                <input type="date" name="ExDate" id="ExDate" />
                                <input type="number" name="CVV" id="CVV" placeholder='CVV'/>
                            </div>
                            
                        <input type="submit" name='PayButton' id="PayButton"/>
                        </form>
                        </div>
                        <div className="payPal-Btns">
                                <div className="BuyPaypal">
                                    <button type='button'>
                                        <a href="#">
                                            <img src={BuyImg} alt="" />
                                        </a>
                                    </button>
                                </div>
                        </div>
                    </div>
            </section>
    </main>
    </>
  )
}

export default ShoppingCart;