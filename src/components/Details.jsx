import { Opacity } from '@mui/icons-material';
import { humidity, moon, sun, uv, wind } from '../assets/index';
import EachDetail from './EachDetail';
import { useSpring, animated } from '@react-spring/web';

const Details = (props) => {
    if (!props.data) return null;

    const Data = [
        {
            title: 'Humidity',
            icon: humidity,
            value: props.data.currentConditions.humidity,
            unit: '%',
            delay: 100,
        },
        {
            title: 'UV Index',
            icon: uv,
            value: props.data.currentConditions.uvindex,
            unit: '',
            delay: 200,
        },
        {
            title: 'Wind Speed',
            icon: wind,
            value: props.data.currentConditions.windspeed,
            unit: 'mph',
            delay: 300,
        },
        {
            title: 'Sunrise Time',
            icon: sun,
            value: props.data.currentConditions.sunrise,
            unit: 'AM',
            delay: 400,
        },
        {
            title: 'Sunset Time',
            icon: moon,
            value: props.data.currentConditions.sunset,
            unit: 'PM',
            delay: 500,
        },
    ];

    const uvSection = useSpring({
        opacity: props.isClicked ? 1 : 0,
        delay: 200,
    });



    return Data.map((e) => (
        <animated.div style={{ ...uvSection }}>
            <EachDetail
                key={e.title}
                src={e.icon}
                text={e.title}
                unit={e.unit}
                value={e.value}
            />
        </animated.div>
    ));
};

export default Details;
