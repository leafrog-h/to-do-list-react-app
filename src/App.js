import React, { Component } from 'react';
import './App.css';
import TodoList from './todolist';
import TodoInput from './todoinput';
class App extends Component {
  state = {
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
    ]
  }

  getId = () => parseInt(Math.random() * 1000)

  handleDelete = (e, id) => {
    console.log(e.target);
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  handleDeleteAll = (e, id) => {
    console.log(e.target);
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.shouldDelete === false
      )]
    });
    if (this.state.todos.every(todo => todo.shouldDelete === false)) alert('No To-do item was chosen!');
  }

  handleChange = (e, id) => {
    console.log(e.target);
    this.setState({
      todos: [...this.state.todos.map(todo => {
        if (todo.id === id) {
          return Object.assign({}, todo, {shouldDelete: !todo.shouldDelete});
        }
      return todo;
      })]
    })
  }

  handleSubmit = (val) => {
    console.log(val);
    const AddedItem = {
      id: Math.random(),
      task: val,
      shouldDelete: false
    }
    this.setState({
      todos: [...this.state.todos, AddedItem]
    })
    console.log(AddedItem);

  }

  toggleDiv = () => {
    const content = document.querySelector('.toggledcontent');
    console.log(content);
    content.style.display = !this.state.isDisplayed? 'block': 'none';
    this.setState({
      isDisplayed: !this.state.isDisplayed,
    })
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
