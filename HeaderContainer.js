import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';

class HeaderContainer extends React.Component {
  render(){
    return(
      <div className="HeaderContainer">
      <h1>TitleComponent/ </h1>
      <h1>MenuTabComponent/</h1>
      <Clock/>
      </div>
    );
  }
}
 export default HeaderContainer;
