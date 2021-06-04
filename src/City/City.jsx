import React from 'react';
import classes from './City.module.css';
import Navigation from '../Navigation/Navigation';
import EachCityContainer from '../EachCity/EachCityContainer';

const City = (props) => {
    const bigPhotos = props && props.smallImages && props.smallImages[props.data.cityNum];
    return (
        <div className={classes.description}>
            <Navigation changeColor='black' />
            <div className={classes.eachDay}>
                <img src={props.data.bigPhoto} alt=''></img>
            </div>
            <p className={classes.summaryData}>
                {props.citiesSummaryData[props.data.cityNum]}
            </p>
            <EachCityContainer
                city={'БАХЧИКЭМП'}
                img={bigPhotos && bigPhotos[8]}
                cityNum={1}
                hideText={props.citiesPlaceInDetail[1][0]}
                hideTextClass={'detailedCityPlace'}
            />
            <EachCityContainer
                city={'ПЕЩЕРЫ_1'}
                img={bigPhotos && bigPhotos[5]}
                cityNum={2}
                hideText={props.citiesPlaceInDetail[1][1]}
                hideTextClass={'detailedCityPlace'}
            />
            <EachCityContainer
                city={'ПЕЩЕРЫ_2'}
                img={bigPhotos && bigPhotos[0]}
                cityNum={3}
                hideText={props.citiesPlaceInDetail[1][2]}
                hideTextClass={'detailedCityPlace'}
            />
            {/* <SwiperTextCities sliderPhotos={smallImages[data.cityNum]} /> */}
            <p className={classes.footer}>© 2021 Мама и Дети, Крым</p>
        </div>
    );
}

export default City;
