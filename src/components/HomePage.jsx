import { useState } from 'react';
import Search from './Search';

const HomePage = () => {
    const [data, setData] = useState(null);

    const getData = (data) => {
        setData(data);
    };

    return (
        <>
            <Search getData={getData} />
            {data && console.log(data.currentConditions.conditions)}
        </>
    );
};

export default HomePage;
