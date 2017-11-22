import React from 'react';


export class ListItem extends React.Component{
  get txt(){
    return this.props.txt;
  }

  render(){
    return <li>{this.txt}</li>;
  }
}
