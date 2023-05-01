import React from 'react'; 


export function Introduction(props) { 
    return (
    <div>
        <h1>{props.name}</h1>
        <h3>{props.title}</h3>
        <hr></hr>
    </div>
    )
}