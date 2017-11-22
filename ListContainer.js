import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './ListItem';
import InputListItem from './InputListItem';

class ListContainer extends React.Component {
  addItemToList(){
    const list = document.querySelector('.ListContainer');

  }

  render(){
    return(
      
      <div className="ListContainer">
        <ListItem id="0" todo="Make lunch" />
        <ListItem id="1" todo="Finish todo list😕" />
      </div>
    );
  }
}

export default ListContainer;
