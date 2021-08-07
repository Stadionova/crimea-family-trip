import React from 'react';
import classes from './EachCity.module.css';

const EachCity = (props) => {
    return (
        <div className={classes.description}>
            <div className={classes.citiesWrapper}>
                <div className={classes.cities}>
                    <p className={classes.cityName}>{props.city}</p>
                    <a href={props.img} target="_blank" rel="noreferrer">
                        <img src={props.img} alt=''></img>
                    </a>
                    <p className={classes[props.currentClass]}>{props.hideText}</p>
                </div>
            </div>
        </div>
    );
}

export default EachCity;
