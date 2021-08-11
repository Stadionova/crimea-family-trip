import React from 'react';
import Navigation from '../Navigation/Navigation';
import classes from './CityDescComponent.module.css';

const CityDescComponent = (props) => {
    const images = props.backImages;
    return (
        <div className={classes.description}>
            <Navigation changeColor='black' />
            <div className={classes.fullDescFirst}>{props.textDesc[0]}</div>
            <div className={classes.photoGallery}>
                {props.lastCity !== true
                    ? <ul>
                        <div className={classes.photoGalleryFirst}>
                            <li><a href={images[0]} target="_blank" rel="noreferrer"><img src={images[0]} alt=''></img></a></li>
                            <li><a href={images[1]} target="_blank" rel="noreferrer"><img src={images[1]} alt=''></img></a></li>
                            <li><a href={images[2]} target="_blank" rel="noreferrer"><img src={images[2]} alt=''></img></a></li>
                        </div>
                        <div className={classes.fullDescSecond}>{props.textDesc[1]}</div>
                        <div className={classes.photoGallerySecond}>
                            <li><a href={images[3]} target="_blank" rel="noreferrer"><img src={images[3]} alt=''></img></a></li>
                            <li><a href={images[4]} target="_blank" rel="noreferrer"><img src={images[4]} alt=''></img></a></li>
                            <li><a href={images[5]} target="_blank" rel="noreferrer"><img src={images[5]} alt=''></img></a></li>
                        </div>
                    </ul>
                    : <ul>
                        <div className={classes.photoGalleryFirst}>
                            <li><a href={images[0]} target="_blank" rel="noreferrer"><img src={images[0]} alt=''></img></a></li>
                            <li><a href={images[1]} target="_blank" rel="noreferrer"><img src={images[1]} alt=''></img></a></li>
                            <li><a href={images[2]} target="_blank" rel="noreferrer"><img src={images[2]} alt=''></img></a></li>
                        </div>
                        <div className={classes.photoGallerySecond}>
                            <li><a href={images[3]} target="_blank" rel="noreferrer"><img src={images[3]} alt=''></img></a></li>
                            <li><a href={images[4]} target="_blank" rel="noreferrer"><img src={images[4]} alt=''></img></a></li>
                            <li><a href={images[5]} target="_blank" rel="noreferrer"><img src={images[5]} alt=''></img></a></li>
                        </div>
                        <div className={classes.fullDescSecond}>{props.textDesc[1]}</div>
                        <div className={classes.photoGallerySecond}>
                            <li><a href={images[6]} target="_blank" rel="noreferrer"><img src={images[6]} alt=''></img></a></li>
                            <li><a href={images[7]} target="_blank" rel="noreferrer"><img src={images[7]} alt=''></img></a></li>
                            <li><a href={images[8]} target="_blank" rel="noreferrer"><img src={images[8]} alt=''></img></a></li>
                        </div>
                        <div className={classes.photoGallerySecond}>
                            <li><a href={images[9]} target="_blank" rel="noreferrer"><img src={images[9]} alt=''></img></a></li>
                            <li><a href={images[10]} target="_blank" rel="noreferrer"><img src={images[10]} alt=''></img></a></li>
                            <li><a href={images[11]} target="_blank" rel="noreferrer"><img src={images[11]} alt=''></img></a></li>
                        </div>
                    </ul>
                }
            </div>
        </div>
    );
}

export default CityDescComponent;
