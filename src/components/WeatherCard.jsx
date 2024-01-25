import PlaceIcon from '@mui/icons-material/Place';
import { Grid, Tooltip, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react';
import {
    cloudy,
    cloudyDay,
    cloudyNight,
    day,
    night,
    rain,
    snow,
    thunder,
} from '../svgs/index';

const WeatherCard = (props) => {
    const [humidity, setHumidity] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        if (props.data.currentConditions.humidity) {
            if (props.data.currentConditions.humidity < 30) {
                setHumidity('Very Dry');
            } else if (props.data.currentConditions.humidity < 50) {
                setHumidity('Dry');
            } else if (props.data.currentConditions.humidity < 60) {
                setHumidity('Moderate');
            } else if (props.data.currentConditions.humidity < 90) {
                setHumidity('Humid');
            }
        }
    }, []);

    useEffect(() => {
        if (props.data.currentConditions.icon) {
            if (props.data.currentConditions.icon === 'clear-day') {
                setIcon('day');
            } else if (props.data.currentConditions.icon === 'clear-night') {
                setIcon('night');
            } else if (props.data.currentConditions.icon === 'rain') {
                setIcon('rain');
            } else if (props.data.currentConditions.icon === 'snow') {
                setIcon('snow');
            } else if (props.data.currentConditions.icon === 'cloudy') {
                setIcon('cloudy');
            } else if (
                props.data.currentConditions.icon === 'partly-cloudy-day'
            ) {
                setIcon('cloudyDay');
            } else if (
                props.data.currentConditions.icon === 'partly-cloudy-night'
            ) {
                setIcon('cloudyNight');
            } else if (props.data.currentConditions.icon === 'thunderstorm') {
                setIcon('thunder');
            }
        }
    }, [props]);

    return (
        <>
            <Grid container margin={0} height={50}>
                <Grid item xs={4}>
                    {icon === 'day' && <img src={day} alt="day" />}
                    {icon === 'night' && <img src={night} alt="night" />}
                    {icon === 'rain' && <img src={rain} alt="rain" />}
                    {icon === 'snow' && <img src={snow} alt="snow" />}
                    {icon === 'cloudy' && <img src={cloudy} alt="cloudy" />}
                    {icon === 'cloudyDay' && (
                        <img src={cloudyDay} alt="cloudyDay" />
                    )}
                    {icon === 'cloudyNight' && (
                        <img src={cloudyNight} alt="cloudyNight" />
                    )}
                    {icon === 'thunder' && <img src={thunder} alt="thunder" />}
                </Grid>
                <Grid
                    item
                    xs={8}
                    sx={{
                        ...centerStyle,
                        position: 'relative',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Typography fontSize={16}>
                        {props.data.resolvedAddress}
                    </Typography>
                    <Tooltip title={'Change Location'}>
                        <IconButton onClick={props.changeCityBtnHandler}>
                            <PlaceIcon />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
            <Grid container my={2} sx={centerStyle}>
                <Grid
                    item
                    xs={4}
                    sx={{ ...centerStyle, flexDirection: 'column' }}
                >
                    <Typography
                        fontSize={12}
                        sx={{
                            borderBottom: '2px solid black',
                            width: 'fit-content',
                        }}
                    >
                        Temperature
                    </Typography>
                    {props.data.currentConditions.temp + '°C'}
                </Grid>
                <Grid item xs={8} sx={{ ...centerStyle }}>
                    <Typography fontSize={12}>
                        {props.data.description}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export default WeatherCard;
