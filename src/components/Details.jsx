import { humidity, moon, sun, uv, wind } from '../assets/index';
import EachDetail from './EachDetail';

const Details = (props) => {
    if (!props.data) return null;

    const Data = [
        {
            title: 'Humidity',
            icon: humidity,
            value: props.data.currentConditions.humidity,
            unit: '%',
        },
        {
            title: 'UV Index',
            icon: uv,
            value: props.data.currentConditions.uvindex,
            unit: '',
        },
        {
            title: 'Wind',
            icon: wind,
            value: props.data.currentConditions.windspeed,
            unit: 'mph',
        },
        {
            title: 'Sunrise',
            icon: sun,
            value: props.data.currentConditions.sunrise,
            unit: 'AM',
        },
        {
            title: 'Sunset',
            icon: moon,
            value: props.data.currentConditions.sunset,
            unit: 'PM',
        },
    ];

    return Data.map((e) => (
        <EachDetail
            key={e.title}
            src={e.icon}
            text={e.title}
            unit={e.unit}
            value={e.value}
        />
    ));
};

export default Details;
