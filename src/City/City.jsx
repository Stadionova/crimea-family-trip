import React from 'react';
import classes from './City.module.css';
import Navigation from '../Navigation/Navigation';
import EachCity from '../EachCity/EachCity';

function City(props) {
    return (
        <div className={classes.description}>
            <Navigation changeColor='black' />
            <div className={classes.eachDay}>
                <img src={props.data.bigPhoto} alt=''></img>
            </div>
            <p className={classes.summaryData}>
                {props.citiesSummaryData[props.data.cityNum]}
            </p>
            <EachCity
                city={'БАХЧИКЭМП'}
                img={props.smallImages[props.data.cityNum][8]}
                cityNum={1}
                hideText={props.citiesPlaceInDetail[1][0]}
                hideTextClass={'detailedCityPlace'}
            />
            <EachCity
                city={'ПЕЩЕРЫ_1'}
                img={props.smallImages[props.data.cityNum][5]}
                cityNum={2}
                hideText={props.citiesPlaceInDetail[1][1]}
                hideTextClass={'detailedCityPlace'}
            />
            <EachCity
                city={'ПЕЩЕРЫ_2'}
                img={props.smallImages[props.data.cityNum][0]}
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
