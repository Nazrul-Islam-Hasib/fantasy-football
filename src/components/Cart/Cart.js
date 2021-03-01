import { library } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cartItem;
    const total = cart.reduce((total, player) => total + player.salary , 0);
    
    return (
        <div>
            <h1 className="text-center">Squad</h1>
            <h5 className="text-center mb-5">Player added: {props.cartItem.length}</h5>
            <div className="d-flex cart-items">
            <div>
                {
                    cart.map(player=> <h6 key={player.id}>Name: {player.name}</h6>)
                }
            </div>
            <div>
                {
                    cart.map(player=> <h6 key={player.id}>Salary: {player.salary}$</h6>)
                }
            </div>
            </div>
            
            <h6 id="totalCost">Total: {total}$</h6>
        </div>
    );
};

export default Cart;