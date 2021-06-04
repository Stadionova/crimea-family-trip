import React from 'react';
import classes from './EachDay.module.css';

const EachDay = (props) => {
    return (
        <div className={classes.eachDay}>
            <img src={props.backImages[props.day]} alt=''></img>
            <div className={classes.backImage}>
                ДЕНЬ {props.day}
                <p className={classes.addText}>{props.addHideText}</p>
            </div>
            <div className={classes.hoverLayer}></div>
        </div>
    )
}

export default EachDay;
