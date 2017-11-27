import React from 'react';

class ListItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isComplete: false
    }

    this.handleComplete = this.handleComplete.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleComplete(){
    this.setState(previousState => ({
      isComplete: !previousState.isComplete
    }))

    // if(this.state.isComplete == false){
    //   this.setState({
    //     isComplete: true
    //   });
    // }else{
    //   this.setState({
    //     isComplete: false
    //   });
    // }
  }

  handleRemove(){

  }

  render(){

    return (
      <li id={"ListItem-"+this.props.id}>
        <button onClick={this.handleComplete}>{this.state.isComplete ? 'Complete👌🏽' : 'Incomplete👎🏼'}</button>
         {this.props.todo} 
        <button onClick={this.handleRemove}>Remove</button>
      </li>
    );
  }
}
// <input type="checkbox" id="completed"/>
export default ListItem;
