import React from 'react';
import classes from './City.module.css';
import Navigation from '../Navigation/Navigation';
import cityPlacesNames from '../cityPlacesNames';
import EachCityInDetailsContainer from '../EachCityInDetails/EachCityInDetailsContainer';
import citiesSummaryData from '../citiesSummaryData';
import citiesPlaceInDetail from '../citiesPlaceInDetail';

import city1 from './city1.JPG';
import city2 from './city2.JPG';
import city3 from './city3.JPG';

const bigPhoto = {
    1: city1,
    2: city2,
    3: city3
}

const City = (props) => {
    let cityNum = props && props.data && props.data.cityNum;
    cityNum ? cityNum = props.data.cityNum : cityNum = +window.location.href.slice(-1);
    const bigPhotos = props.smallImages[cityNum];
    return (
        <div className={classes.description}>
            <Navigation changeColor='black' />
            <div className={classes.eachDay}>
                <a href={bigPhoto[cityNum]} target="_blank" rel="noreferrer">
                    <img src={bigPhoto[cityNum]} alt=''></img>
                </a>
            </div>
            <p className={classes.summaryData}>
                {citiesSummaryData[cityNum][0]}
            </p>
            {cityNum === 3
                ? <EachCityInDetailsContainer
                    city={cityPlacesNames[cityNum][0]}
                    img={bigPhotos[0]}
                    cityNum={1}
                    hideText={citiesPlaceInDetail[cityNum][0]}
                    hideTextClass={'detailedCityPlace'}
                />
                : <>
                    <EachCityInDetailsContainer
                        city={cityPlacesNames[cityNum][0]}
                        img={bigPhotos[0]}
                        cityNum={1}
                        hideText={citiesPlaceInDetail[cityNum][0]}
                        hideTextClass={'detailedCityPlace'}
                    />
                    <p className={classes.summaryData}>
                        {citiesSummaryData[cityNum][1]}
                    </p>
                    <EachCityInDetailsContainer
                        city={cityPlacesNames[cityNum][1]}
                        img={bigPhotos[1]}
                        cityNum={2}
                        hideText={citiesPlaceInDetail[cityNum][1]}
                        hideTextClass={'detailedCityPlace'}
                    />
                    <p className={classes.summaryData}>
                        {citiesSummaryData[cityNum][2]}
                    </p>
                    <EachCityInDetailsContainer
                        city={cityPlacesNames[cityNum][2]}
                        img={bigPhotos[2]}
                        cityNum={3}
                        hideText={citiesPlaceInDetail[cityNum][2]}
                        hideTextClass={'detailedCityPlace'}
                    />
                </>
            }
        </div>
    );
}

export default City;
