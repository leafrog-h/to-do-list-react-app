import React from "react";

export const TodoItem = ({todo: {id, task}, onChange, onDelete}) => {
    const itemStyle = {
        borderBottom: '1px #ccc dotted',
        padding: '10px',
        backgroundColor: 'green'
        
    }
    return (
        <div className='itemdiv' style={itemStyle} >
            <p>
            <input type='checkbox' value={task} onChange={onChange(id)} />
            <label value={task} >{task}</label>
            <button type='button' onClick={onDelete(id)}>Delete</button>
            </p>
        </div>
    )
};