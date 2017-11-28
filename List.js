import React from 'react';
import ToDoItem from './ToDoItem';

class List extends React.Component {

  render(){
      this.props.items.map((item, index) => console.log(item + ' ' + index));
    return(
      <ul className="List">
      {
        this.props.items.map((item, index) => <ToDoItem key={index} todo={item} onRemove={this.props.onRemove}/>)
      }
      </ul>
    );
  }
}

export default List;
