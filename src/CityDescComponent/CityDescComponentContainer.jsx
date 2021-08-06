import React from 'react';
import CityDescComponent from './CityDescComponent';
import classes from './CityDescComponent.module.css';

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

import city1Place4Img1 from './photos/bahchisarai/monastyr/img1.JPG';
import city1Place4Img2 from './photos/bahchisarai/monastyr/img2.JPG';
import city1Place4Img3 from './photos/bahchisarai/monastyr/img3.JPG';
import city1Place4Img4 from './photos/bahchisarai/monastyr/img4.JPG';
import city1Place4Img5 from './photos/bahchisarai/monastyr/img5.JPG';
import city1Place4Img6 from './photos/bahchisarai/monastyr/img6.JPG';

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

import city2Place3Img1 from './photos/sevastopol/mys_1/img1.JPG';
import city2Place3Img2 from './photos/sevastopol/mys_1/img2.JPG';
import city2Place3Img3 from './photos/sevastopol/mys_1/img3.JPG';
import city2Place3Img4 from './photos/sevastopol/mys_1/img4.JPG';
import city2Place3Img5 from './photos/sevastopol/mys_1/img5.JPG';
import city2Place3Img6 from './photos/sevastopol/mys_1/img6.JPG';

import city2Place4Img1 from './photos/sevastopol/mys_2/img1.JPG';
import city2Place4Img2 from './photos/sevastopol/mys_2/img2.JPG';
import city2Place4Img3 from './photos/sevastopol/mys_2/img3.JPG';
import city2Place4Img4 from './photos/sevastopol/mys_2/img4.JPG';
import city2Place4Img5 from './photos/sevastopol/mys_2/img5.JPG';
import city2Place4Img6 from './photos/sevastopol/mys_2/img6.JPG';

import city3Place1Img1 from './photos/simferopol/parks/img1.JPG';
import city3Place1Img2 from './photos/simferopol/parks/img2.JPG';
import city3Place1Img3 from './photos/simferopol/parks/img3.JPG';
import city3Place1Img4 from './photos/simferopol/parks/img4.JPG';
import city3Place1Img5 from './photos/simferopol/parks/img5.JPG';
import city3Place1Img6 from './photos/simferopol/parks/img6.JPG';
import city3Place1Img7 from './photos/simferopol/parks/img7.JPG';
import city3Place1Img8 from './photos/simferopol/parks/img8.JPG';
import city3Place1Img9 from './photos/simferopol/parks/img9.JPG';
import city3Place1Img10 from './photos/simferopol/parks/img10.JPG';
import city3Place1Img11 from './photos/simferopol/parks/img11.JPG';
import city3Place1Img12 from './photos/simferopol/parks/img12.JPG';

const miniPhotos = {
    1: {
        1: [city1Place1Img1, city1Place1Img2, city1Place1Img3, city1Place1Img4, city1Place1Img5, city1Place1Img6],
        2: [city1Place2Img1, city1Place2Img2, city1Place2Img3, city1Place2Img4, city1Place2Img5, city1Place2Img6],
        3: [city1Place3Img1, city1Place3Img2, city1Place3Img3, city1Place3Img4, city1Place3Img5, city1Place3Img6],
        4: [city1Place4Img1, city1Place4Img2, city1Place4Img3, city1Place4Img4, city1Place4Img5, city1Place4Img6]
    },
    2: {
        1: [city2Place1Img1, city2Place1Img2, city2Place1Img3, city2Place1Img4, city2Place1Img5, city2Place1Img6],
        2: [city2Place2Img1, city2Place2Img2, city2Place2Img3, city2Place2Img4, city2Place2Img5, city2Place2Img6],
        3: [city2Place3Img1, city2Place3Img2, city2Place3Img3, city2Place3Img4, city2Place3Img5, city2Place3Img6],
        4: [city2Place4Img1, city2Place4Img2, city2Place4Img3, city2Place4Img4, city2Place4Img5, city2Place4Img6]
    },
    3: {
        1: [city3Place1Img1, city3Place1Img2, city3Place1Img3, city3Place1Img4, city3Place1Img5,
            city3Place1Img6, city3Place1Img7, city3Place1Img8, city3Place1Img9, city3Place1Img10,
            city3Place1Img11, city3Place1Img12]
    }
}

const textDataDesc = {
    1: {
        1: `BakchiCamp. Долго выбирать, где же нам остановиться на ночлег в Бахчисарае нам не пришлось, тем более, 
        что еще в походе было решено – никаких гостишек, все должно быть приближено к походным условиям. 
        Больше всего походным условиям соответствует кемпинг, на территории которого турист может разбить палатку за 
        символическую сумму, помыться, воспользоваться импровизированной кухней и не менее важное, в кемпинге можно 
        оставить тяжелый рюкзак и передвигаться по городу налегке.

        Первая же ссылка в интернете, если набрать в поисковой строке “кемпинг в Бахчисарае”, указывает на 
        BakchiCamp – “кемпинг для скалолазов, альпинистов, туристов - ценителей активного отдыха” - так гласит объявление. 
        После такого призыва, ты уже не сомневаешься в том, что это место именно для тебя – для истинного ценителя 
        активного отдыха.  Приятное местечко, недорогое, всего 200 рублей с человека за сутки, есть все необходимое 
        для приготовления пищи, места для установки палатки, а самое главное – это наличие душа с теплой водой. 

        Много ли надо туристу чтобы почувствовать себя человеком после длительного путешествия с рюкзаком за плечами.
        Быстренько установив палатку, слегка освежившись под душем (какое же это блаженство принять душ, 
        после 11 дней обтирания влажными салфетками), мы закинули в маленькие рюкзачки все самое необходимое 
        (деньги, документы, воду, крем от загара) и пошли гулять по городу.`,

        2: `Чуфут-Кале. Всю необходимую информацию о Чуфут-кале можно найти в интернете или взять экскурсовода. 
        Мы же отправились в пещерный город рано утром, к открытию, чтобы спокойно полазить по сооружениям и не спеша 
        все самостоятельно осмотреть, не прибегая к услугам экскурсовода, а предоставив нашему воображению простор 
        для создания образов жителей города, атмосферы, в которой они проживали. И это было правильное решение – мы были 
        под впечатлением от увиденного и решили преодолеть 8 километров пешком чтобы увидеть еще один пещерный 
        город – Качи-Кальон.`,

        3: `Качи-Кальон. Качи-Кальон отличается от Чуфут-Кале, но также поражает воображение. Если есть время, 
        то лучше отправиться сюда на следующий день, чтобы никуда не спешить и насладиться прогулкой 
        (если так можно сказать о пещерном городе, в котором приходилось большую часть времени не просто ходить, а лазить) 
        в полной мере.`
    },
    2: {
        1: `Яшмовый пляж. На яшмовый пляж можно попасть, пройдя Георгиевский монастырь. К пляжу ведут 800 ступенек вниз. 
        Идешь себе, радуешься, красота кругом, на самом пляже разноцветная галька. Говорят, что иногда, самые удачливые 
        находят здесь яшму. Покупаться не удалось, холодновато еще, но даже просто посидеть у моря и помедитировать 
        приносит не меньшее удовольствие. Выход с пляжа - там же где и вход – это те самые 800 ступенек, правда уже вверх. 
        Но после нашего похода преодолеть каких-то 800 ступенек вверх, не составило нам труда.`,

        2: `Мыс Фиолент. С мыса открывается великолепный вид на яшмовый пляж, на скалистые берега, на Черное море. 
        Море такое лазурное, что с высоты можно разглядеть дно. Говорят, что в этих местах прекраснейший дайвинг, 
        и даже можно увидеть дельфинов. Единственно, что омрачает всю эту красоту – это то, что коттеджи и отели очень 
        близко подобрались к мысу.`,

        3: `Херсонес Таврический – античный город. Возможно для тех, кто уже когда-то бывал на античных руинах, 
        Херсонес не покажется интересным. Кто-то возможно скажет – что, мы камней не видели... Тогда лучше туда не идти. 
        А мы пошли, потому что ничего подобного ранее не видели. Пошли просто прогуляться, особо не вникая в историю 
        и в принципе прекрасно провели время.`
    },
    3: {
        1: `Симферополь. В Симферополе мы закончили наше 17-дневное путешествие. Здесь мы решили остановиться на пару дней 
        и в полной мере насладиться неспешными прогулками по паркам, дегустацией крымских вин и сыра. Кемпинг нам найти 
        не удалось, поэтому мы сняли в центре города квартиру за 2000 рублей сутки. Квартира оказалась уютной 
        и укомплектованной всем необходимым. А много ли надо путешественникам – теплый душ, удобное спальное место 
        и мягкая подушка. Мы смыли с себя походную грязь и отлично выспались.
        Симферополь оказался небольшим городом и за два дня мы его обошли практически вдоль и поперек. 
        Осмотр достопримечательностей не входил в наши планы, хотя для любителей истории здесь есть что посмотреть. 
        https://top10.travel/dostoprimechatelnosti-simferopolya (https://top10.travel/dostoprimechatelnosti-simferopolya/)/`
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
        <>
            {city === 3
                ? <CityDescComponent
                    backImages={miniPhotos && miniPhotos[city] && miniPhotos[city][cityNum]}
                    placeNumber={cityNum}
                    textDesc={textDataDesc && textDataDesc[city] && textDataDesc[city][cityNum]}
                    lastCity={true}
                />
                : <CityDescComponent
                    backImages={miniPhotos && miniPhotos[city] && miniPhotos[city][cityNum]}
                    placeNumber={cityNum}
                    textDesc={textDataDesc && textDataDesc[city] && textDataDesc[city][cityNum]}
                    lastCity={false}
                />}
            <p className={classes.footer}>© 2021 Мама и Дети, Крым</p>
        </>
    );
}

export default CityDescComponentContainer;
