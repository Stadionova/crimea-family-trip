import React from 'react';
import classes from './DayDescription.module.css';
import tourists from './icon.png';
import SwiperSlider from '../Swiper/Swiper';
import sample from '../sample.mp4';

const DayDescription = (props) => {
    const images = props.dataImages;
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
            <video className={classes.videoTag} autoPlay loop>
                <source src={sample} type='video/mp4' />
            </video>
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
                            <li><a href={images[0]} target="_blank" rel="noreferrer"><img src={images[0]} alt=''></img></a></li>
                            <li><a href={images[1]} target="_blank" rel="noreferrer"><img src={images[1]} alt=''></img></a></li>
                            <li><a href={images[2]} target="_blank" rel="noreferrer"><img src={images[2]} alt=''></img></a></li>
                        </div>
                        <div>
                            <li><a href={images[3]} target="_blank" rel="noreferrer"><img src={images[3]} alt=''></img></a></li>
                            <li><a href={images[4]} target="_blank" rel="noreferrer"><img src={images[4]} alt=''></img></a></li>
                            <li><a href={images[5]} target="_blank" rel="noreferrer"><img src={images[5]} alt=''></img></a></li>
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
