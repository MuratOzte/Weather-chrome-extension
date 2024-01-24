//hooks
import { useEffect, useState } from 'react';
//packages
import { TextField, InputAdornment } from '@mui/material';
//icons
import SearchIcon from '@mui/icons-material/Search';

const Search = (props) => {
    const [city, setCity] = useState(localStorage.getItem('city') || '');
    const BASEURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=TZZYVDVTTVJQVUTN4ZG4BBA9H&contentType=json`;

    const searchBtnHandler = () => {
        localStorage.setItem('city', city);
        fetch(BASEURL)
            .then((res) => res.json())
            .then((data) => {
                props.getData(data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        searchBtnHandler();
    }, []);

    return (
        <TextField
            placeholder="Type your location"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    searchBtnHandler();
                }
            }}
            sx={{
                backgroundColor: '#F9EFDB',
                borderRadius: 5,
                margin: 0,
                border: 'none',
                outline: 'none',
                '&:hover': {
                    backgroundColor: '#F9EFDB',
                    border: 'none',
                    outline: 'none',
                },
                '& .MuiOutlinedInput-root': {
                    borderRadius: 5,
                    '&:hover fieldset': {
                        borderColor: 'transparent',
                    },
                },
            }}
            InputProps={{
                endAdornment: (
                    <InputAdornment
                        position="end"
                        sx={{
                            ':hover': {
                                cursor: 'pointer',
                                border: 'none',
                            },
                        }}
                    >
                        <SearchIcon onClick={searchBtnHandler} />
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default Search;
