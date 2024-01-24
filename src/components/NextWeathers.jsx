import { Grid } from '@mui/material';
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
        return (
            (props.data.days[i].tempmax + props.data.days[i].tempmin) /
            2
        ).toFixed(2);
    };

    const date = (i) => {
        return (
            <>
                {props.data.days[i].datetime.split('-')[2] +
                    '/' +
                    props.data.days[i].datetime.split('-')[1]}
                <br />
            </>
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
                borderRadius:'5px',
                justifyContent: 'space-around',
            }}
        >
            <Grid item xs={2} sx={itemStyles}>
                {date(1)}
                {avarageTemp(1) + '°C'}
                {getIcon(1)}
            </Grid>
            <Grid item xs={2} sx={itemStyles}>
                {date(2)}
                {avarageTemp(2) + '°C'}
                {getIcon(2)}
            </Grid>
            <Grid item xs={2} sx={itemStyles}>
                {date(3)}
                {avarageTemp(3) + '°C'}
                {getIcon(3)}
            </Grid>
            <Grid item xs={2} sx={itemStyles}>
                {date(4)}
                {avarageTemp(4) + '°C'}
                {getIcon(4)}
            </Grid>
            {/* <Grid
                item
                xs={2}
                sx={{ borderLeft: '2px solid black', pl: 0.5, ...itemStyles }}
            >
                {date(5)}
                {avarageTemp(5) + '°C'}
                {getIcon(5)}
            </Grid> */}
        </Grid>
    );
};

const cardStyles = {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    marginx: 1,
};

const itemStyles = {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
};

export default NextWeathers;
