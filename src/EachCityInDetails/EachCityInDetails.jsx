import React from 'react';
import classes from './EachCityInDetails.module.css';

const EachCityInDetails = (props) => {
    return (
        <div className={classes.description}>
            <div className={classes.citiesWrapper}>
                <div className={classes.cities}>
                    <p className={classes.cityName}>{props.city}</p>
                    <a href={props.img} target="_blank" rel="noreferrer">
                        <img src={props.img} alt=''></img>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default EachCityInDetails;
