import React from 'react';
import classes from './EachCityInDetails.module.css';
import Navigation from '../Navigation/Navigation';

const EachCityInDetails = (props) => {
    return (
        <div className={classes.description}>
            <Navigation changeColor='black' />
            <div className={classes.citiesWrapper}>
                <div className={classes.cities}>
                    <p className={classes.cityName}>{props.city}</p>
                    <img src={props.img} alt=''></img>
                </div>
            </div>
        </div>
    );
}

export default EachCityInDetails;
