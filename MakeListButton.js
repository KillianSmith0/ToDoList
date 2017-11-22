import React from 'react';
import ListItem from './ListItem';

export class MakeListButton extends React.Component {
  get name(){
    return this.props.name;
  }

  makeListItem(){
    let toDo= prompt("What do you have to do?");

    let item = <ListItem id="0" todo={toDo}/>;
    
  }

  render(){
    return (<button type="button" onClick={this.makeListItem}>{this.name}</button>);
  }
}
// onClick=this.makeListItem // returns the makeListItem function itself.
// onClick=this.makeListItem() // the returned vlue of the function
export default MakeListButton;
