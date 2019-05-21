import React, {Component} from 'react';

const ListItem = ({a, b}) => {
    const listItem = "list-item";
    const active = "list-item active";
    return ( <li className={a === b ? active : listItem}>
        <div className={`img-container img-` + a } />
    </li>);
   
};

export default ListItem;