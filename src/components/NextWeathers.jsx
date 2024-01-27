import { Grid, Tooltip } from '@mui/material';
import {
    cloudy,
    rain,
    snow,
    cloudyDay,
    cloudyNight,
    day,
    night,
    thunder,
} from '../svgs';

const NextWeathers = (props) => {
    const avarageTemp = (i) => {
        return {
            tempmin: props.data.days[i].tempmin.toFixed(2),
            tempmax: props.data.days[i].tempmax.toFixed(2),
        };
    };

    const date = (i) => {
        return (
            <div style={{ borderBottom: '1px solid black', marginBottom: 4 }}>
                {props.data.days[i].datetime.split('-')[2] +
                    '/' +
                    props.data.days[i].datetime.split('-')[1]}
                <br />
            </div>
        );
    };

    const sunIcon = (left) => {
        return (
            <Tooltip title="Max Temperature" placement="left">
                <img
                    src={day}
                    style={{
                        position: 'absolute',
                        top: 166,
                        left: left,
                        width: 40,
                    }}
                />
            </Tooltip>
        );
    };
    const moonIcon = (left) => {
        return (
            <Tooltip title="Min Temperature" placement="left">
                <img
                    src={night}
                    style={{
                        position: 'absolute',
                        top: 185,
                        left: left,
                        width: 38,
                    }}
                />
            </Tooltip>
        );
    };

    const getIcon = (i) => {
        let icon;
        if (props.data) {
            if (props.data.days[i].icon === 'clear-day') {
                icon = day;
            } else if (props.data.days[i].icon === 'clear-night') {
                icon = night;
            } else if (props.data.days[i].icon === 'rain') {
                icon = rain;
            } else if (props.data.days[i].icon === 'snow') {
                icon = snow;
            } else if (props.data.days[i].icon === 'cloudy') {
                icon = cloudy;
            } else if (props.data.days[i].icon === 'partly-cloudy-day') {
                icon = cloudyDay;
            } else if (props.data.days[i].icon === 'partly-cloudy-night') {
                icon = cloudyNight;
            } else if (props.data.days[i].icon === 'thunderstorm') {
                icon = thunder;
            }
        }
        return (
            <>
                <img src={icon} />
            </>
        );
    };

    return (
        <Grid
            container
            sx={{
                display: 'flex',
                margin: 'auto',
                boxShadow: 2,
                backgroundColor: '#F9EFDB',
                padding: 1,
                borderRadius: '5px',
                justifyContent: 'space-around',
            }}
        >
            <Grid item xs={2} sx={itemStyles}>
                {date(1)}
                {sunIcon(0)}
                {avarageTemp(1).tempmax + '°C'}
                <br />
                {moonIcon(0)}
                {avarageTemp(1).tempmin + '°C'}
                {getIcon(1)}
            </Grid>
            <Grid item xs={2} sx={itemStyles}>
                {date(2)}
                {sunIcon(75)}
                {avarageTemp(2).tempmax + '°C'}
                <br />
                {moonIcon(75)}
                {avarageTemp(2).tempmin + '°C'}

                {getIcon(2)}
            </Grid>
            <Grid item xs={2} sx={itemStyles}>
                {date(3)}
                {sunIcon(155)}
                {avarageTemp(3).tempmax + '°C'}
                <br />
                {moonIcon(155)}
                {avarageTemp(3).tempmin + '°C'}
                {getIcon(3)}
            </Grid>
        </Grid>
    );
};

const itemStyles = {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
};

export default NextWeathers;
