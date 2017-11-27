import React from 'react';
import ReactDOM from 'react-dom';
import ToDoItem from './ToDoItem';
import InputListItem from './InputListItem';

class ListContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      items: []
    }
  }

  render(){
    return(
      <div>
      <InputListItem updatedList/>
      <ul className="ListContainer">
        <ToDoItem id="0" todo="Make lunch" />
        <ToDoItem id="1" todo="Finish todo list😕" />
      </ul>
      </div>
    );
  }
}

export default ListContainer;
