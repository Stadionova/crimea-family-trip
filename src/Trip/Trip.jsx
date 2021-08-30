import React from 'react';
import classes from './Trip.module.scss';
import Navigation from '../Navigation/Navigation';
import EachDayContainer from '../EachDay/EachDayContainer';
import dayDescriptions from '../dayDescriptions';
import hideTripText from './hideTripText';

const Trip = () => {
    return (
        <div className={classes.trip}>
            <Navigation changeColor='black' />
            <div className={classes.summaryText}>
                <p>Крым в нашей жизни возник неожиданно. Три месяца мы готовились в поход по Ликийской тропе в Турции.
                    <br />Подготовка к походу была серьёзной – мы изучали маршрут, выбирали подходящее снаряжение
                    и даже купили билет до Антальи.
                    <br />Но ковид вмешался в наши планы. Накануне нашего отъезда (15 апреля) отменяют все рейсы в Турцию.
                    <br />
                    <br />И мы, не долго думая, “переобуваемся” – сдаём билеты, покупаем новые до Симферополя,
                    “методом тыка” выбираем маршрут и уже 17 апреля мы на “Крымской тропе”.
                    Вот так ковид поспособствовал тому, что мы впервые побывали в Крыму, о чём совсем не жалеем.
                    А Ликийская тропа никуда от нас не денется и это уже другая история.
                    <br />
                    <br />Наш поход длился 11 дней, шли мы от Судака до Бахчисарая по Крымской тропе.
                    Затем сошли с тропы и провели по 2 дня в каждом из городов: Бахчисарай, Севастополь и Симферополь.
                </p>
            </div>
            <div className={classes.allDays}>
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
            </div>
            <p className={classes.footer}>© 2021 Мама и Дети, Крым</p>
        </div>
    )
}

export default Trip;
