import React from 'react';
import './card.styles.css'



export const Card = props => (


    <h1 className="card-container" key={props.monster.id}>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        {props.monster.name}
    </h1>
);