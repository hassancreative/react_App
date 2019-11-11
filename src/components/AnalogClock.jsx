import React from 'react';

function AnalogClock(props){
    console.log(props.time);

    return(
        <h2>   { props.time }  </h2>
    )
}

export default AnalogClock;