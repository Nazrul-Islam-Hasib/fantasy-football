import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const { name, age, salary, nationality, image, position} = props.players;
    return (
        <div className="col-md-6">
            <div className="card mb-3 mt-3">
                <img className="card-img-top" src={image} alt="Card-img"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Age: {age}</p>
                    <p className="card-text">Nationality: {nationality}</p>
                    <p className="card-text">Position: {position}</p>
                    <p className="card-text">Salary: {salary}$</p>
                    <button className="btn btn-primary" onClick={()=> props.handleAddToTeam(props.players)}><FontAwesomeIcon icon={faShoppingCart} /> Add to team</button>
                </div>
            </div>
        </div>
    );
};

export default Player;