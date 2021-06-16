import React from 'react';
import Navigation from '../Navigation/Navigation';
import classes from './CityDescComponent.module.css';

const CityDescComponent = () => {
    return (
        <div className={classes.description}>
            <Navigation changeColor='black' />
            <div className={classes.fullDesc}>Здесь скоро появится детальное описание нашего пребывания в каждом городе.</div>
        </div>
    );
}

export default CityDescComponent;
