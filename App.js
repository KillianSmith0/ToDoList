import React from 'react';
import NavBar from './NavBar';
import MyButton from './MyButton';
import FormContainer from './FormContainer';

class App extends React.Component{
  render(){
    return (
    <div className="col-md-4" padding='200'>
      <div className="HeaderContainer">
        <h1>TitleComponent/ </h1>
        <h1>MenuTabComponent/</h1>
      </div>
      <div className="ListContainer">
        <FormContainer />
        <MyButton name="Make List Item"/>
      </div>
    </div>);
  }
}

export default App;
