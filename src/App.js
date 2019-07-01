import React, { Component } from 'react';
import './App.css';
import TodoList from './todolist';
import TodoInput from './todoinput';
import uuid from 'uuid'
class App extends Component {
  state = {todos: fetchLocal('todos'), isNavDisplayed: false} || {
    todos: [
      {
        id: this.getId(),
        task: 'do pull-ups',
        shouldDelete: false
      },
      {
        id: this.getId(),
        task: 'jog in the morning',
        shouldDelete: false
      },
      {
        id: this.getId(),
        task: 'walk several kilometers\' length ',
        shouldDelete: false,
      }
    ],
    isNavDisplayed: false
  }

  getId = () => uuid.v4()

  fetchLocal = (itemName) => JSON.parse(localStorage.getItem(itemName))

  setLocal = (itemName, obj) => localStorage.setItem(itemName, JSON.stringfy(obj))

  handleDelete = (e, id) => {
    console.log(e.target);
    const restTodos = [...this.state.todos.filter(todo => todo.id !== id)]
    this.setLocal("todos", restTodos)
  }

  handleDeleteAll = (e, id) => {
    console.log(e.target);
    const restTodos = [...this.state.todos.filter(todo => todo.shouldDelete === false)]
    this.setLocal("todos", restTodos)
    });
    if (this.state.todos.every(todo => todo.shouldDelete === false)) alert('No To-do item was chosen!');
  }

  handleChange = (e, id) => {
    console.log(e.target);
    const todoList = this.state.todos.map(todo => {
      if (todo.id === id) todo..shouldDelete = !todo.shouldDelete
    })
    this.setLocal("todos", todoList)
  }

  handleSubmit = (val) => {
    console.log(val);
    const AddedItem = {
      id: getId(),
      task: val,
      shouldDelete: false
    }
    const newTodos = [...this.state.todos, AddedItem]
    this.setLocal("todos", newsTodos)
    console.log(AddedItem);

  }

  toggleDiv = () => {
    const content = document.querySelector('.toggledcontent');
    console.log(content);
    this.setLocal("isNavDisplayed", !this.state.isNavDisplayed)
    content.style.display = this.state.isNavDisplayed? 'block': 'none';

  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button id='togglebtn' onClick={this.toggleDiv} >Menu</button>
          <h2>
            A SPA for My To-do list.
          </h2>
        </header>
        <div className='toggledcontent' style={{display: 'none'}} >
            <ul>
              <li><a href='#' >Home</a></li>
              <li><a href='#'>Contact</a></li>
              <li><a href='#' >About</a></li>
            </ul>
        </div>
        <TodoInput onSubmit={this.handleSubmit}  />
        <TodoList todos={this.state.todos} onDelete={this.handleDelete} onChange={this.handleChange} />
        <button type='button' id='deleteall' onClick={this.handleDeleteAll} >Delete All</button>
        </div>
    );
  }
}

export default App;
