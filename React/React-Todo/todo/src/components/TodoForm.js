import React, { useState } from 'react';

function TodoForm(props) {

    const [text, setText] = useState(""); 


    function handleChange(event) {
        let valueInput = event.target.value;
        setText(valueInput);
    }

    function addItem(event) {
        event.preventDefault();
        if (text) {
            // setItems([...items, text]);
            props.onAddItem(text);
            setText("");
            return;
        }
        alert("Campo vazio!")
    }

    return (
        <form>
            <input onChange={handleChange} type="text" value={text} />
            <button onClick={addItem}>Add</button>
        </form>
    )
}

export default TodoForm;
