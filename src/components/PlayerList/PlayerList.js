import React, { useEffect, useState } from 'react';
import './PlayerList.css'
import data from '../../data/data.json'
import Player from '../Player/Player';
import Cart from '../Cart/Cart';

const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(data);
    }, [])

    const[cart, setCart] = useState([]);

    const handleAddToTeam = (player) =>{
        const cartUpdate = [...cart, player];
        setCart(cartUpdate);
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-8 text-center">
                <div className="player-container">
                    <div className="row">
                        {
                            players.map(player => <Player players={player} key={player.id} handleAddToTeam={handleAddToTeam}></Player>)
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="cart-container">
                    <Cart cartItem={cart}></Cart>
                </div>
            </div>

        </div>
        </div>
    );
};

export default PlayerList;