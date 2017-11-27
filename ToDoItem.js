import React from 'react';

class ToDoItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isComplete: false,
      isRemoved: false
    }

    this.handleComplete = this.handleComplete.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleComplete(){
    this.setState(prevState => ({
      isComplete: !prevState.isComplete
    }))
  }

  handleRemove(){
    this.setState(prevState => ({
      isRemoved: !prevState.isRemoved
    }))
  }

  render(){
    if(this.state.isRemoved){
      return null;
    }

    return (
      <li id={"ToDoItem-"+this.props.id}>
        <button onClick={this.handleComplete}>{this.state.isComplete ? 'Complete👌🏽' : 'Incomplete👎🏼'}</button>
         {this.props.todo}
        <button onClick={this.handleRemove}>❌</button>
      </li>
    );
  }
}
// <input type="checkbox" id="completed"/>
export default ToDoItem;
