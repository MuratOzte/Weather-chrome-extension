import { Tooltip } from '@mui/material';
import { animated, useSpring } from '@react-spring/web';
import { humidity, moon, sun, uv, wind } from '../assets/index';

const Details = (props) => {
    if (!props.data) return null;

    const Data = [
        {
            title: 'Humidity',
            src: humidity,
            value: props.data.currentConditions.humidity,
            unit: '%',
            delay: 100,
        },
        {
            title: 'UV Index',
            src: uv,
            value: props.data.currentConditions.uvindex,
            unit: '',
            delay: 200,
        },
        {
            title: 'Wind Speed',
            src: wind,
            value: props.data.currentConditions.windspeed,
            unit: 'mph',
            delay: 300,
        },
        {
            title: 'Sunrise Time',
            src: sun,
            value: props.data.currentConditions.sunrise,
            unit: 'AM',
            delay: 400,
        },
        {
            title: 'Sunset Time',
            src: moon,
            value: props.data.currentConditions.sunset,
            unit: 'PM',
            delay: 500,
        },
    ];

    const section1 = useSpring({
        opacity: props.isClicked ? 1 : 0,
        delay: 200,
    });
    const section2 = useSpring({
        opacity: props.isClicked ? 1 : 0,
        delay: 350,
    });
    const section3 = useSpring({
        opacity: props.isClicked ? 1 : 0,
        delay: 400,
    });
    const section4 = useSpring({
        opacity: props.isClicked ? 1 : 0,
        delay: 600,
    });
    const section5 = useSpring({
        opacity: props.isClicked ? 1 : 0,
        delay: 800,
    });

    return (
        <>
            <Tooltip title={Data[0].title} placement="left">
                <animated.div
                    style={{
                        ...section1,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginLeft: 75,
                        marginTop: 12,
                    }}
                >
                    <img
                        src={Data[0].src}
                        alt={Data[0].text}
                        style={{ height: '24px' }}
                    />
                    <p style={{ marginLeft: 20 }}>
                        {Data[0].value} {Data[0].unit}
                    </p>
                </animated.div>
            </Tooltip>
            <Tooltip title={Data[1].title} placement="left">
                <animated.div
                    style={{
                        ...section2,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginLeft: 75,
                        marginTop: 12,
                    }}
                >
                    <img
                        src={Data[1].src}
                        alt={Data[1].text}
                        style={{ height: '24px' }}
                    />
                    <p style={{ marginLeft: 20 }}>
                        {Data[1].value} {Data[1].unit}
                    </p>
                </animated.div>
            </Tooltip>
            <Tooltip title={Data[2].title} placement="left">
                <animated.div
                    style={{
                        ...section3,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginLeft: 75,
                        marginTop: 12,
                    }}
                >
                    <img
                        src={Data[2].src}
                        alt={Data[2].text}
                        style={{ height: '24px' }}
                    />
                    <p style={{ marginLeft: 20 }}>
                        {Data[2].value} {Data[2].unit}
                    </p>
                </animated.div>
            </Tooltip>
            <Tooltip title={Data[3].title} placement="left">
                <animated.div
                    style={{
                        ...section4,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginLeft: 75,
                        marginTop: 12,
                    }}
                >
                    <img
                        src={Data[3].src}
                        alt={Data[3].text}
                        style={{ height: '24px' }}
                    />
                    <p style={{ marginLeft: 20 }}>
                        {Data[3].value} {Data[3].unit}
                    </p>
                </animated.div>
            </Tooltip>
            <Tooltip title={Data[4].title} placement="left">
                <animated.div
                    style={{
                        ...section5,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginLeft: 75,
                        marginTop: 12,
                    }}
                >
                    <img
                        src={Data[4].src}
                        alt={Data[4].text}
                        style={{ height: '24px' }}
                    />
                    <p style={{ marginLeft: 20 }}>
                        {Data[4].value} {Data[4].unit}
                    </p>
                </animated.div>
            </Tooltip>
        </>
    );
};

export default Details;
