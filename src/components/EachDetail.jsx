import { Tooltip } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';

const EachDetail = (props) => {
    const springler = (time) => {
        return useSpring({
            opacity: props.isClicked ? 0 : 1,
            delay: time,
        });
    };
    return (
        <Tooltip title={props.text} placement="left">
            <animated.div
                style={{
                    ...springler(props.delay),
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginLeft: 75,
                    marginTop: 12,
                }}
            >
                <img
                    src={props.src}
                    alt={props.text}
                    style={{ height: '24px' }}
                />
                <p style={{ marginLeft: 20 }}>
                    {props.value} {props.unit}
                </p>
            </animated.div>
        </Tooltip>
    );
};

export default EachDetail;
