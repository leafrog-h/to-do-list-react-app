 import React from 'react';
 
class TodoInput extends React.Component {
     state = {
         input: ''
     }

     handleSubmit = (e) => {
         e.preventDefault();
         console.log(e.target.textinput.value);
         let val = e.target.textinput.value;
         this.props.onSubmit(val);
         e.target.visibleinput.value = '';
     }

     passTextValue = (e) => {
        e.target.nextElementSibling.value = e.target.value;
     }

     render() {
     return (
    <div >
    <form id='submitform' onSubmit={this.handleSubmit} >
    <fieldset>
    <p>
    <label htmlFor='textinput'>Add Your todo-plans to the todo-list below:</label>
    <input type='text'  size='90' id='visibleinput'
        placeholder='Add your todo-stuffs here.'  
        onChange={this.passTextValue} required />
    <input type='text' id='textinput' style={{display: 'none'}}  />
    <input type='submit' value='Submit' />
    </p>
    </fieldset>
    </form>
    </div>
     )
    } 
}


export default TodoInput;