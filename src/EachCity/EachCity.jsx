import React from 'react';
import classes from './EachCity.module.css';

function EachCity(props) {
    return (
        <div className={classes.description}>
            <div className={classes.citiesWrapper}>
                <div className={classes.cities}>
                    <p className={classes.cityName}>{props.city}</p>
                    <img src={props.img} alt=''></img>
                    <p className={classes[props.currentClass]}>{props.hideText}</p>
                </div>
            </div>
        </div>
    );
}

export default EachCity;
