import React, {Component} from 'react';

const ListItem = ({a, b}) => {
    const listItem = "list-item";
    const active = "list-item active";
    return ( <li className={a === b ? active : listItem}>{a}</li>);
   
};

export default ListItem;