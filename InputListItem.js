import React from 'react';
import ReactDOM from 'react-dom';
import ToDoItem from './ToDoItem';

class InputListItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {todo: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({todo: event.target.value})
  }

  handleSubmit(event){
    /* have a state/prop that will be updated everytime an item is added to the list
      Steps:
      1. List container has a list of items.
      2. onSubmit of a new item, the list of items should be update, apppending the most recent item
      3. Ensure there is a key assigned to the list item
    */
    const listContainer = document.querySelector('.ListContainer');
    ReactDOM.render(<ToDoItem id="0" todo={this.state.todo} />, listContainer);

    this.setState({
      todo: ''
    });
    event.preventDefault();
  }

  render(){
    return (
      <form className="InputListItem" onSubmit={this.handleSubmit} >
        <input type="text" value={this.state.todo} onChange={this.handleChange}/>
        <input type="submit" value="Enter"/>
      </form>
    );
  }
}

export default InputListItem;
