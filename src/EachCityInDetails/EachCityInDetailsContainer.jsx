import React from 'react';
import EachCityInDetails from './EachCityInDetails';
import { NavLink } from 'react-router-dom';

const EachCityInDetailsContainer = (props) => {
    const currentClass = props.hideTextClass;
    return (
        <>
            <NavLink
                to={{
                    pathname: '/aboutcity/' + props.cityNum,
                    bigPhoto: props.img,
                    cityNum: props.cityNum,
                    city: +window.location.href.slice(-1)
                }}>
                <EachCityInDetails
                    img={props.img}
                    currentClass={currentClass}
                    city={props.city}
                    hideText={props.hideText}
                    cityNum={props.cityNum}
                />
            </NavLink>
        </>
    );
}

export default EachCityInDetailsContainer;
