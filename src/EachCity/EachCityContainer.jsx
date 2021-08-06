import React from 'react';
import { NavLink } from 'react-router-dom';
import EachCity from './EachCity';

const EachCityContainer = (props) => {
    const currentClass = props.hideTextClass;
    return (
        <>
            <NavLink
                to={{
                    pathname: '/city/' + props.cityNum,
                    desc: props.cityDesc,
                    bigPhoto: props.img,
                    cityNum: props.cityNum
                }}>
                <EachCity
                    img={props.img}
                    currentClass={currentClass}
                    city={props.city}
                    hideText={props.hideText}
                />
            </NavLink>
        </>
    );
}

export default EachCityContainer;
