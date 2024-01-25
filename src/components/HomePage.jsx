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

    const buttonSection = useSpring({
        opacity: isClicked ? 1 : 0,
        delay: 1000,
    });

    const weatherCardSection = useSpring({
        opacity: isClicked ? 0 : 1,
        delay: 400,
    });

    const nextWeatherSection = useSpring({
        opacity: isClicked ? 0 : 1,
        delay: 600,
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
                    gap: 10,
                }}
            >
                {data && console.log(data)}
                <animated.div style={{ ...weatherCardSection }}>
                    {data && (
                        <WeatherCard
                            data={data}
                            changeCityBtnHandler={changeCityBtnHandler}
                        />
                    )}
                </animated.div>
                <animated.div style={{ ...nextWeatherSection }}>
                    {data && <NextWeathers data={data} />}
                </animated.div>
                <animated.button
                    onClick={() => {
                        setIsClicked((e) => (e = !e));
                    }}
                    style={{
                        position: 'absolute',
                        top: 90,
                        right: -20,
                        fontSize: '40px',
                        background: 'none',
                        border: 'none',
                        color: 'black',
                        cursor: 'pointer',
                    }}
                >
                    {'\u276D'}
                </animated.button>
            </animated.div>
            <animated.div
                style={{
                    ...secondSection,
                }}
            >
                <Details data={data} isClicked={isClicked} />
                <animated.button
                    onClick={() => {
                        setIsClicked((e) => (e = !e));
                    }}
                    style={{
                        ...buttonSection,
                        position: 'absolute',
                        fontSize: '40px',
                        top: 125,
                        left: 30,
                        background: 'none',
                        border: 'none',
                        color: 'black',
                        cursor: 'pointer',
                    }}
                >
                    {'\u276C'}
                </animated.button>
            </animated.div>
        </>
    );
};

export default HomePage;
