import React from "react";
import '/todoitem.css';

const TodoItem = ({todo: {id, task}, onChange, onDelete}) => {
    const itemStyle = {
        borderBottom: '1px #ccc dotted',
        padding: '10px',
        backgroundColor: 'green'
        
    }
    return (
        <div className='itemdiv' style={itemStyle} >
            <p className="checkbox-container">
            <input type='checkbox' value={task} onChange={onChange(id)} id={id}/>
            <label value={task} for={id}>{task}</label>
            <button type='button' onClick={onDelete(id)}>Delete</button>
            </p>
        </div>
    )
};

export default TodoItem
