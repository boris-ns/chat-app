import React from 'react';
import './people-list.css';

const PeopleList = (props) => {
    return (
        <ul>
            {props.onlinePeople.map(item => <li key={item}>{item}</li>)}
        </ul>
    );
}

export default PeopleList;