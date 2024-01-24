import { useState } from 'react';
import Search from './Search';
import WeatherCard from './WeatherCard';

const HomePage = () => {
    const [data, setData] = useState(null);

    const getData = (data) => {
        setData(data);
    };

    return (
        <>
            <Search getData={getData} />
            {data && console.log(data)}
            {data && <WeatherCard data={data} />}
        </>
    );
};

export default HomePage;
