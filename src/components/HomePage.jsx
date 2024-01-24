import { useEffect, useState } from 'react';
import Search from './Search';
import WeatherCard from './WeatherCard';
import PlaceIcon from '@mui/icons-material/Place';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import NextWeathers from './NextWeathers';

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

    return (
        <>
            <div style={{ position: 'absolute', top: '100px' }}>
                {!city && <Search getData={getData} />}
            </div>
            {data && console.log(data)}
            {data && (
                <WeatherCard
                    data={data}
                    changeCityBtnHandler={changeCityBtnHandler}
                />
            )}
            {data && <NextWeathers data={data} />}
        </>
    );
};

export default HomePage;
