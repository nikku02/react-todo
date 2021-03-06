import React from 'react'
import Todo from './Todo'

function ToDoList({ todos, setTodos, filteredTodos }) {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map(todo => (
                        <Todo setTodos={setTodos} todo={todo} todos={todos} key={todo.id} text={todo.text} />
                    ))}
                </ul>   
            </div>
        </div>
    )
}

export default ToDoList
