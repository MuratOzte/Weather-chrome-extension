import { useEffect, useState } from 'react';
import NextWeathers from './NextWeathers';
import Search from './Search';
import WeatherCard from './WeatherCard';
import { animated, useSpring } from '@react-spring/web';
import Details from './Details';

const HomePage = () => {
    const [data, setData] = useState(null);
    const city = localStorage.getItem('city') || null;

    const getData = (data) => {
        setData(data);
    };

    useEffect(() => {
        if (city === null) return;

        const BASEURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=TZZYVDVTTVJQVUTN4ZG4BBA9H&contentType=json`;

        fetch(BASEURL)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((err) => console.log(err));
    }, [city]);

    const changeCityBtnHandler = () => {
        localStorage.removeItem('city');
        setData(null);
    };

    const [isClicked, setIsClicked] = useState(false);

    //animations
    const firstSection = useSpring({
        x: isClicked ? -500 : 0,
    });

    const secondSection = useSpring({
        x: isClicked ? 0 : 500,
        delay: 100,
    });

    return (
        <>
            <div style={{ position: 'absolute', top: '100px' }}>
                {!city && <Search getData={getData} />}
            </div>
            <animated.div
                style={{
                    ...firstSection,
                    position: 'fixed',
                    maxWidth: 250,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {data && console.log(data)}
                {data && (
                    <WeatherCard
                        data={data}
                        changeCityBtnHandler={changeCityBtnHandler}
                    />
                )}
                {data && <NextWeathers data={data} />}
                <button
                    onClick={() => {
                        setIsClicked((e) => (e = !e));
                    }}
                >
                    Deneme Butonu
                </button>
            </animated.div>
            <animated.div
                style={{
                    ...secondSection,
                }}
            >
                <Details data={data} />
                <button
                    onClick={() => {
                        setIsClicked((e) => (e = !e));
                    }}
                >
                    Deneme Butonu
                </button>
            </animated.div>
        </>
    );
};

export default HomePage;
