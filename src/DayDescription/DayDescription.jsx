import React from 'react';
import classes from './DayDescription.module.css';
import tourists from './icon.png';
import SwiperSlider from '../Swiper/Swiper';

function DayDescription(props) {
    return (
        <div className={classes.description}>
            <div className={classes.eachDay}>
                <p>ДЕНЬ {props.day}</p>
                <img src={props.backImages[props.day]} alt=''></img>
                <div className={classes.hoverLayer}></div>
            </div>
            <div className={classes.shortDesc}>
                <h5>{props.dayDescriptions[props.day]}</h5>
            </div>
            <div className={classes.fullDesc}>
                <p className={classes.text1}>
                    {props.dataDaysDesc[props.day] && props.dataDaysDesc[props.day][0]}
                </p>
                <img className={classes.tourist} src={tourists} alt='tourist'></img>
                <p className={classes.text2}>
                    {props.dataDaysDesc[props.day] && props.dataDaysDesc[props.day][1]}
                </p>
            </div>
            <SwiperSlider sliderPhotos={props.dataImagesSlider} />
            <div className={classes.fullDesc}>
                <div className={classes.fullDescPar}>
                    <p className={classes.text3}>
                        {props.dataDaysDesc[props.day] && props.dataDaysDesc[props.day][2]}
                    </p>
                    <p className={classes.text4}>
                        {props.dataDaysDesc[props.day] && props.dataDaysDesc[props.day][3]}
                    </p>
                </div>
                <div className={classes.photoGallery}>
                    <ul>
                        <div>
                            <li><img src={props.dataImages && props.dataImages[0]} alt=''></img></li>
                            <li><img src={props.dataImages && props.dataImages[1]} alt=''></img></li>
                            <li><img src={props.dataImages && props.dataImages[2]} alt=''></img></li>
                        </div>
                        <div>
                            <li><img src={props.dataImages && props.dataImages[3]} alt=''></img></li>
                            <li><img src={props.dataImages && props.dataImages[4]} alt=''></img></li>
                            <li><img src={props.dataImages && props.dataImages[5]} alt=''></img></li>
                        </div>
                    </ul>
                </div>
                <p className={classes.text5}>
                    {props.dataDaysDesc[props.day] && props.dataDaysDesc[props.day][4]}
                </p>
            </div>
        </div>
    );
}

export default DayDescription;
