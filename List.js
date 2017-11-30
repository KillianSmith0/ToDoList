import React from 'react';
import ToDoItem from './ToDoItem';

class List extends React.Component {

  render(){
      // this.props.items.map((item, index) => console.log(item + ' ' + index));
    return(
      <ol className="List">
      {
        this.props.items.map(
          (item, index) =>
          <ToDoItem key={index} todo={item.todo} onRemove={this.props.onRemove} time={item.time}/>)
      }
      </ol>
    );
  }
}

export default List;
