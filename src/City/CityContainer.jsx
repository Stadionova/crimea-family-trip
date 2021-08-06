import React from 'react';
import citiesSummaryData from '../citiesSummaryData';
import citiesPlaceInDetail from '../citiesPlaceInDetail';
import City from './City';
import classes from './City.module.css';

import city1_1 from './city1/city1_1.JPG';
import city1_2 from './city1/city1_2.JPG';
import city1_3 from './city1/city1_3.JPG';
import city2_1 from './city2/city2_1.JPG';
import city2_2 from './city2/city2_2.JPG';
import city2_3 from './city2/city2_3.JPG';
import city3_1 from './city3/city3_1.JPG';

const smallImages = {
    '1': [city1_1, city1_2, city1_3],
    '2': [city2_1, city2_2, city2_3],
    '3': [city3_1]
}

const CityContainer = (props) => {
    const data = props && props.location;
    return (
        <>
            <City
                data={data}
                smallImages={smallImages}
                citiesSummaryData={citiesSummaryData}
                citiesPlaceInDetail={citiesPlaceInDetail}
            />
            <p className={classes.footer}>© 2021 Мама и Дети, Крым</p>
        </>
    );
}

export default CityContainer;
