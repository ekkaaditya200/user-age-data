import React from 'react';
import classes from './Card.module.css';
const Card = props => {
    // return <div className={classes.card} >{props.children}</div>

    //If we want to add any other class to this module by AddUser then we have to write like this
    return <div className={`${classes.card} ${props.className}`} >{props.children}</div>
};

export default Card;