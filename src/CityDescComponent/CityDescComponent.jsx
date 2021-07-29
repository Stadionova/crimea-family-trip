import React from 'react';
import Navigation from '../Navigation/Navigation';
import classes from './CityDescComponent.module.css';

const CityDescComponent = (props) => {
    return (
        <div className={classes.description}>
            <Navigation changeColor='black' />
            <div className={classes.fullDesc}>Здесь скоро появится детальное описание нашего пребывания в каждом городе.</div>
            <div className={classes.photoGallery}>
                <ul>
                    <div>
                        <li><img src={props.backImages && props.backImages[0]} alt=''></img></li>
                        <li><img src={props.backImages && props.backImages[1]} alt=''></img></li>
                        <li><img src={props.backImages && props.backImages[2]} alt=''></img></li>
                    </div>
                    <div>
                        <li><img src={props.backImages && props.backImages[3]} alt=''></img></li>
                        <li><img src={props.backImages && props.backImages[4]} alt=''></img></li>
                        <li><img src={props.backImages && props.backImages[5]} alt=''></img></li>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default CityDescComponent;
