import React from 'react';
import EachCityContainer from '../EachCity/EachCityContainer';
import Navigation from '../Navigation/Navigation';
import classes from './ByCities.module.css';

import city1 from '../city1.JPG';
import city2 from '../city2.JPG';
import city3 from '../city3.JPG';

import dataCityDesc from './dataCityDesc';
import hideCityText from './hideCityText';

class ByCities extends React.Component {
    render() {
        return (
            <div className={classes.description}>
                <Navigation changeColor='black' />
                <div className={classes.citiesWrapper}>
                    <EachCityContainer
                        city={'БАХЧИСАРАЙ'}
                        img={city1}
                        cityNum={1}
                        cityDesc={dataCityDesc[1]}
                        hideText={hideCityText[1]}
                        hideTextClass={'city'}
                    />
                    <EachCityContainer
                        city={'СЕВАСТОПОЛЬ'}
                        img={city2}
                        cityNum={2}
                        cityDesc={dataCityDesc[2]}
                        hideText={hideCityText[2]}
                        hideTextClass={'city'}
                    />
                    <EachCityContainer
                        city={'СИМФЕРОПОЛЬ'}
                        img={city3}
                        cityNum={3}
                        cityDesc={dataCityDesc[3]}
                        hideText={hideCityText[3]}
                        hideTextClass={'city'}
                    />
                </div>
                <p className={classes.footer}>© 2021 Мама и Дети, Крым</p>
            </div>
        );
    }
}

export default ByCities;
