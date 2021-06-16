import React from 'react';
import EachCityInDetails from './EachCityInDetails';
import { NavLink } from 'react-router-dom';

const EachCityInDetailsContainer = (props) => {
    const currentClass = props.hideTextClass;
    return (
        <div>
            <NavLink
                to={{
                    pathname: '/aboutcity/' + props.cityNum,
                    bigPhoto: props.img,
                    cityNum: props.cityNum
                }}>
                <EachCityInDetails
                    img={props.img}
                    currentClass={currentClass}
                    city={props.city}
                    hideText={props.hideText}
                    cityNum={props.cityNum}
                />
            </NavLink>
        </div>
    );
}

export default EachCityInDetailsContainer;
