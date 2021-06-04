import MainPage from './MainPage/MainPage';
import classes from './App.module.css';
import Trip from './Trip/Trip';
import { Redirect, Route } from "react-router-dom";
import Equipment from './Equipment/Equipment';
import EachDay from './EachDay/EachDay';
import React from "react";
import DayDescriptionContainer from './DayDescription/DayDescriptionContainer';
import ByCities from './ByCities/ByCities';
import CityContainer from './City/CityContainer';

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    document.querySelector('[class*=navigation]')
      && (document.querySelector('[class*=navigation]').style.boxShadow = 'var(--shd-scrl,0 0 5px rgba(0,0,0,.5))');
  } else {
    document.querySelector('[class*=navigation]')
      && (document.querySelector('[class*=navigation]').style.boxShadow = 'none');
  }
});

const App = () => {
  return (
    <div className={classes.app}>
      <Redirect from="/" to="/main" />
      {/* Route компонента следит за адресной строкой браузера
      и как только она увидит, что её path совпадает с адрес строкой,
      она автоматич запуск рендер и отрисовыв то, что должна */}
      <Route path='/main' component={MainPage} />
      <Route path='/trip' component={Trip} />
      <Route path='/equipment' component={Equipment} />
      <Route path='/day' component={EachDay} />
      <Route path='/dayDesc' component={DayDescriptionContainer} />
      <Route path='/cities' component={ByCities} />
      <Route path='/city' component={CityContainer} />
    </div>
  );
}

export default App;
