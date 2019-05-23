import React from 'react' ;
import { TodoItem } from "./todoitem";

const TodoList = (props) => {
    return props.todos.map((todo, i) => (
            <TodoItem key={todo.id} todo={todo} onChange={props.onChange} onDelete={props.onDelete} />
        )
    )
}
export default TodoList;