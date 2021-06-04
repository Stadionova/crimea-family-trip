import React from 'react';
import classes from './Trip.module.css';
import Navigation from '../Navigation/Navigation';
import EachDayContainer from '../EachDay/EachDayContainer';
import dayDescriptions from '../dayDescriptions';
import hideTripText from './hideTripText';

const Trip = () => {
    return (
        <div className={classes.trip}>
            <Navigation changeColor='black' />
            <div className={classes.summaryText}>
                <p>Наш поход длился 11 дней.
                <br />Шли мы от Судака до Бахчисарая по Крымской тропе.
                <br />Затем сошли с тропы и провели по 2 дня в каждом из городов: Бахчисарай, Севастополь и Симферополь.
            </p>
            </div>
            <div className={classes.day}>
                <EachDayContainer day={1} addHideText={hideTripText[1]} />
                <EachDayContainer day={2} addHideText={hideTripText[2]} />
            </div>
            <div className={classes.day}>
                <EachDayContainer day={3} addHideText={hideTripText[3]} />
                <EachDayContainer day={4} addHideText={hideTripText[4]} />
            </div>
            <div className={classes.day}>
                <EachDayContainer day={5} desc={dayDescriptions[5]} addHideText={hideTripText[5]} />
                <EachDayContainer day={6} desc={dayDescriptions[6]} addHideText={hideTripText[6]} />
            </div>
            <div className={classes.day}>
                <EachDayContainer day={7} addHideText={hideTripText[7]} />
                <EachDayContainer day={8} addHideText={hideTripText[8]} />
            </div>
            <div className={classes.day}>
                <EachDayContainer day={9} addHideText={hideTripText[9]} />
                <EachDayContainer day={10} addHideText={hideTripText[10]} />
            </div>
            <div className={classes.day}>
                <EachDayContainer day={11} addHideText={hideTripText[11]} />
            </div>
            <p className={classes.footer}>© 2021 Мама и Дети, Крым</p>
        </div>
    )
}

export default Trip;
