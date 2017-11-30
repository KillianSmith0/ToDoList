import React from 'react';
import NavBar from './NavBar'
import Clock from './Clock';

class HeaderContainer extends React.Component {
  render(){
    return(
      <div className="HeaderContainer">
      <h1>To-Do List🖍</h1>
      <NavBar/>
      </div>
    );
  }
}
 export default HeaderContainer;
