import React from 'react';
import Card from './Card'
import ListItem from './ListItem';

function List (props) {
    return (
        <ul>
            {props.items.map(item => <ListItem key={item.id} item={item} onDone={props.onDone} onItemDeleted={props.onItemDeleted}></ListItem>)}
        </ul>
    )
}

export default List;