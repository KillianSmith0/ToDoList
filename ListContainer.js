import React from 'react';
import List from './List';

class ListContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      todo: '',
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({todo: event.target.value})
  }

  handleSubmit(event){
    var toDoItem = {
      todo: this.state.todo,
      time: this.props.time.toLocaleString()
    }

    if(this.state.todo){  // if(this.state.todo && true) === this.state.todo... true != 0/null/false/undefined/""
      this.setState({
        todo: '',
        items: [...this.state.items, toDoItem]
      });
    }
    event.preventDefault();   // Stops from reloading page
  }

  onRemove(id){

  }

  render(){
    return(
      <div className="ListContainer">
        <form className="ToDo" onSubmit={this.handleSubmit} >
          <input type="text" value={this.state.todo} onChange={this.handleChange}/>
          <input type="submit" value="Enter"/>
        </form>
        <List items={this.state.items} onRemove={this.onRemove}/>
      </div>
    )
  }
}

export default ListContainer;
