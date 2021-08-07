import React from 'react';
import classes from './EachDay.module.css';

const EachDay = (props) => {
    return (
        <div className={classes.eachDay}>
            <a href={props.backImages[props.day]} target="_blank" rel="noreferrer">
                <img src={props.backImages[props.day]} alt=''></img>
            </a>
            <div className={classes.backImage}>
                ДЕНЬ {props.day}
                <p className={classes.addText}>{props.addHideText}</p>
            </div>
            <div className={classes.hoverLayer}></div>
        </div>
    )
}

export default EachDay;
