import React from 'react';
import ReactDom from 'react-dom';
import ToDoForm from './ToDoForm';

/* It will be the wrapper of the to-do form. Where the user enters a to-do item */
class FormContainer extends React.Component{

  render(){
    return (
      <div className="FormContainer">
      <h2>To-Do List👌🏽</h2>
      <ToDoForm />
      </div>
    );
  }
}

export default FormContainer;
