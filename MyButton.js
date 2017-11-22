import React from 'react';
import ListItem from './ListItem';

export class MyButton extends React.Component {
  get name(){
    return this.props.name;
  }

  makeListItem(){
    let toDo= prompt("What do you have to do?");

    let item = <ListItem txt={toDO}/>;
    alert(item.txt);
  }

  render(){
    return (<button type="button" onClick={this.makeListItem}>{this.name}</button>);
  }
}

export default MyButton;
