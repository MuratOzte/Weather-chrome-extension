const EachDetail = (props) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginLeft: 75,
            }}
        >
            <img src={props.src} alt={props.text} style={{ height: '24px' }} />
            <p style={{ marginLeft: 20 }}>
                {props.value} {props.unit}
            </p>
        </div>
    );
};

export default EachDetail;
