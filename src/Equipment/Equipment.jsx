import React from 'react';
import classes from './Equipment.module.scss';
import Navigation from '../Navigation/Navigation';

const Equipment = () => {
    return (
        <div className={classes.equipment}>
            <Navigation changeColor='black' />
            <div className={classes.text}>
                Здесь скоро появится информация о нашем снаряжении.
            </div>
        </div>
    )
}

export default Equipment;
