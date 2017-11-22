import React from 'react';

class ListItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      complete: "Incomplete😡",
      isComplete: false
    }

    this.handleComplete = this.handleComplete.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleComplete(){
    if(this.state.isComplete == false){
      this.setState({
        complete: "Complete!👌🏽",
        isComplete: true
      });
    }else{
      this.setState({
        complete: "Incomplete😡",
        isComplete: false
      });
    }
  }

  handleRemove(){

  }

  render(){

    return (
      <div id={"ListItem-"+this.props.id}>
        <button onClick={this.handleComplete}>{this.state.complete}</button>
          {this.props.todo}
        <button onClick={this.handleRemove}>Remove</button>
      </div>
    );
  }
}
// <input type="checkbox" id="completed"/>
export default ListItem;
