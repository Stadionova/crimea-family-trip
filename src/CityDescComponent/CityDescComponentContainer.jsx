import React from 'react';
import CityDescComponent from './CityDescComponent';

import city1Place1Img1 from './photos/bahchisarai/bahchikamp/img1.jpg';
import city1Place1Img2 from './photos/bahchisarai/bahchikamp/img2.jpg';
import city1Place1Img3 from './photos/bahchisarai/bahchikamp/img3.jpg';
import city1Place1Img4 from './photos/bahchisarai/bahchikamp/img4.jpg';
import city1Place1Img5 from './photos/bahchisarai/bahchikamp/img5.jpg';
import city1Place1Img6 from './photos/bahchisarai/bahchikamp/img6.jpg';

import city1Place2Img1 from './photos/bahchisarai/pesher_1/img1.JPG';
import city1Place2Img2 from './photos/bahchisarai/pesher_1/img2.JPG';
import city1Place2Img3 from './photos/bahchisarai/pesher_1/img3.JPG';
import city1Place2Img4 from './photos/bahchisarai/pesher_1/img4.JPG';
import city1Place2Img5 from './photos/bahchisarai/pesher_1/img5.JPG';
import city1Place2Img6 from './photos/bahchisarai/pesher_1/img6.JPG';

import city1Place3Img1 from './photos/bahchisarai/pesher_2/img1.JPG';
import city1Place3Img2 from './photos/bahchisarai/pesher_2/img2.JPG';
import city1Place3Img3 from './photos/bahchisarai/pesher_2/img3.JPG';
import city1Place3Img4 from './photos/bahchisarai/pesher_2/img4.JPG';
import city1Place3Img5 from './photos/bahchisarai/pesher_2/img5.JPG';
import city1Place3Img6 from './photos/bahchisarai/pesher_2/img6.JPG';

import city2Place1Img1 from './photos/sevastopol/naberezhnaya/img1.JPG';
import city2Place1Img2 from './photos/sevastopol/naberezhnaya/img2.JPG';
import city2Place1Img3 from './photos/sevastopol/naberezhnaya/img3.JPG';
import city2Place1Img4 from './photos/sevastopol/naberezhnaya/img4.JPG';
import city2Place1Img5 from './photos/sevastopol/naberezhnaya/img5.JPG';
import city2Place1Img6 from './photos/sevastopol/naberezhnaya/img6.JPG';

import city2Place2Img1 from './photos/sevastopol/hersones/img1.JPG';
import city2Place2Img2 from './photos/sevastopol/hersones/img2.JPG';
import city2Place2Img3 from './photos/sevastopol/hersones/img3.JPG';
import city2Place2Img4 from './photos/sevastopol/hersones/img4.JPG';
import city2Place2Img5 from './photos/sevastopol/hersones/img5.JPG';
import city2Place2Img6 from './photos/sevastopol/hersones/img6.JPG';

import city2Place3Img1 from './photos/sevastopol/mysas_2/img1.JPG';
import city2Place3Img2 from './photos/sevastopol/mysas_2/img2.JPG';
import city2Place3Img3 from './photos/sevastopol/mysas_2/img3.JPG';
import city2Place3Img4 from './photos/sevastopol/mysas_2/img4.JPG';
import city2Place3Img5 from './photos/sevastopol/mysas_2/img5.JPG';
import city2Place3Img6 from './photos/sevastopol/mysas_2/img6.JPG';

import city3Place1Img1 from './photos/simferopol/park_1/img1.JPG';
import city3Place1Img2 from './photos/simferopol/park_1/img2.JPG';
import city3Place1Img3 from './photos/simferopol/park_1/img3.JPG';
import city3Place1Img4 from './photos/simferopol/park_1/img4.JPG';
import city3Place1Img5 from './photos/simferopol/park_1/img5.JPG';
import city3Place1Img6 from './photos/simferopol/park_1/img6.JPG';

import city3Place2Img1 from './photos/simferopol/park_2/img1.JPG';
import city3Place2Img2 from './photos/simferopol/park_2/img2.JPG';
import city3Place2Img3 from './photos/simferopol/park_2/img3.JPG';
import city3Place2Img4 from './photos/simferopol/park_2/img4.JPG';
import city3Place2Img5 from './photos/simferopol/park_2/img5.JPG';
import city3Place2Img6 from './photos/simferopol/park_2/img6.JPG';

import city3Place3Img1 from './photos/simferopol/park_3/img1.JPG';
import city3Place3Img2 from './photos/simferopol/park_3/img2.JPG';
import city3Place3Img3 from './photos/simferopol/park_3/img3.JPG';
import city3Place3Img4 from './photos/simferopol/park_3/img4.JPG';
import city3Place3Img5 from './photos/simferopol/park_3/img5.JPG';
import city3Place3Img6 from './photos/simferopol/park_3/img6.JPG';

const miniPhotos = {
    1: {
        1: [city1Place1Img1, city1Place1Img2, city1Place1Img3, city1Place1Img4, city1Place1Img5, city1Place1Img6],
        2: [city1Place2Img1, city1Place2Img2, city1Place2Img3, city1Place2Img4, city1Place2Img5, city1Place2Img6],
        3: [city1Place3Img1, city1Place3Img2, city1Place3Img3, city1Place3Img4, city1Place3Img5, city1Place3Img6]
    },
    2: {
        1: [city2Place1Img1, city2Place1Img2, city2Place1Img3, city2Place1Img4, city2Place1Img5, city2Place1Img6],
        2: [city2Place2Img1, city2Place2Img2, city2Place2Img3, city2Place2Img4, city2Place2Img5, city2Place2Img6],
        3: [city2Place3Img1, city2Place3Img2, city2Place3Img3, city2Place3Img4, city2Place3Img5, city2Place3Img6]
    },
    3: {
        1: [city3Place1Img1, city3Place1Img2, city3Place1Img3, city3Place1Img4, city3Place1Img5, city3Place1Img6],
        2: [city3Place2Img1, city3Place2Img2, city3Place2Img3, city3Place2Img4, city3Place2Img5, city3Place2Img6],
        3: [city3Place3Img1, city3Place3Img2, city3Place3Img3, city3Place3Img4, city3Place3Img5, city3Place3Img6]
    }
}

const CityDescComponentContainer = (props) => {
    let cityNum;
    let city;
    if (props.location.cityNum) {
        cityNum = props.location.cityNum;
        city = props.location.city;
        localStorage.setItem('city', props.location.city);
    } else {
        cityNum = props && props.location && props.location.pathname.slice(-1);
        city = localStorage.getItem('city');
    }
    return (
        <div>
            <CityDescComponent
                backImages={miniPhotos && miniPhotos[city] && miniPhotos[city][cityNum]}
                placeNumber={cityNum}
            />
        </div>
    );
}

export default CityDescComponentContainer;
