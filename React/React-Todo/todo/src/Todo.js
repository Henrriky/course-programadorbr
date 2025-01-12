import React, { useEffect, useState } from 'react';
import List from './components/List';
import Item from './components/Item';
import TodoForm from './components/TodoForm';
import Modal from './components/Modal';
import './Todo.css';

const SAVED_ITEMS = "savedItems";

function Todo() {

    const [showModal, setShowModal] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if (savedItems) {
            setItems(savedItems);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    }, [items])

    function onAddItem(text) {

        let item = new Item(text);

        setItems([...items, item])
        onHideModal();
    }

    function onItemDeleted(item) {

        let filteredItems = items.filter(itemList => itemList.id != item.id);
        setItems(filteredItems)

    }

    function onDone(item) {

        let updatedItems = items.map(itemList => {
            if (itemList.id === item.id) {
                itemList.done = !itemList.done;
            }

            return itemList;
        });

        setItems(updatedItems);

    }

    function onHideModal(e) {
        setShowModal(false);
    }


    return (
        <div className="container">
            <header className="header">
                <h1>Todo</h1>
                <button className="addButton" onClick={() => setShowModal(true)}>+</button>
            </header>

            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items} />
            <Modal show={showModal} onHideModal={onHideModal}>
                <TodoForm onAddItem={onAddItem}/>
            </Modal>
        </div>
    )
}


export default Todo