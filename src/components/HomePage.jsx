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
            {!city && <Search getData={getData} />}
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

const changeCityStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ':hover': {
        cursor: 'pointer',
        textDecoration: 'underline',
    },
};

export default HomePage;
