import React from 'react';
import classes from './City.module.css';
import Navigation from '../Navigation/Navigation';
import cityPlacesNames from '../cityPlacesNames';
import EachCityInDetailsContainer from '../EachCityInDetails/EachCityInDetailsContainer';
import citiesSummaryData from '../citiesSummaryData';
import citiesPlaceInDetail from '../citiesPlaceInDetail';
import city1 from '../city1.JPG';
import city2 from '../city2.JPG';
import city3 from '../city3.JPG';

import city1_1 from './city1/city1_1.JPG';
import city1_2 from './city1/city1_2.JPG';
import city1_3 from './city1/city1_3.JPG';
import city1_4 from './city1/city1_4.JPG';
import city1_5 from './city1/city1_5.JPG';
import city1_6 from './city1/city1_6.JPG';
import city1_7 from './city1/city1_7.JPG';
import city1_8 from './city1/city1_8.JPG';
import city1_9 from './city1/city1_9.JPG';

import city2_1 from './city2/city2_1.JPG';
import city2_2 from './city2/city2_2.JPG';
import city2_3 from './city2/city2_3.JPG';
import city2_4 from './city2/city2_4.JPG';
import city2_5 from './city2/city2_5.JPG';
import city2_6 from './city2/city2_6.JPG';
import city2_7 from './city2/city2_7.JPG';
import city2_8 from './city2/city2_8.JPG';
import city2_9 from './city2/city2_9.JPG';

import city3_1 from './city3/city3_1.JPG';
import city3_2 from './city3/city3_2.JPG';
import city3_3 from './city3/city3_3.JPG';
import city3_4 from './city3/city3_4.JPG';
import city3_5 from './city3/city3_5.JPG';
import city3_6 from './city3/city3_6.JPG';
import city3_7 from './city3/city3_7.JPG';
import city3_8 from './city3/city3_8.JPG';
import city3_9 from './city3/city3_9.JPG';

const smallImages = {
    '1': [city1_1, city1_2, city1_3, city1_4, city1_5, city1_6, city1_7, city1_8, city1_9],
    '2': [city2_1, city2_2, city2_3, city2_4, city2_5, city2_6, city2_7, city2_8, city2_9],
    '3': [city3_1, city3_2, city3_3, city3_4, city3_5, city3_6, city3_7, city3_8, city3_9]
}

const bigPhoto = {
    1: city1,
    2: city2,
    3: city3
}

const City = (props) => {
    let cityNum = props && props.data && props.data.cityNum;
    cityNum ? cityNum = props.data.cityNum : cityNum = +window.location.href.slice(-1);
    const bigPhotos = smallImages[cityNum];
    return (
        <div className={classes.description}>
            <Navigation changeColor='black' />
            <div className={classes.eachDay}>
                <img src={bigPhoto[cityNum]} alt=''></img>
            </div>
            <p className={classes.summaryData}>
                {citiesSummaryData[cityNum]}
            </p>
            <EachCityInDetailsContainer
                city={cityPlacesNames[cityNum][0]}
                img={bigPhotos[8]}
                cityNum={1}
                hideText={citiesPlaceInDetail[cityNum][0]}
                hideTextClass={'detailedCityPlace'}
            />
            <EachCityInDetailsContainer
                city={cityPlacesNames[cityNum][1]}
                img={bigPhotos[5]}
                cityNum={2}
                hideText={citiesPlaceInDetail[cityNum][1]}
                hideTextClass={'detailedCityPlace'}
            />
            <EachCityInDetailsContainer
                city={cityPlacesNames[cityNum][2]}
                img={bigPhotos[0]}
                cityNum={3}
                hideText={citiesPlaceInDetail[cityNum][2]}
                hideTextClass={'detailedCityPlace'}
            />
            <p className={classes.footer}>© 2021 Мама и Дети, Крым</p>
        </div>
    );
}

export default City;
