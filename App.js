import React from 'react';
// import NavBar from './NavBar';
import MakeListButton from './MakeListButton';
import HeaderContainer from './HeaderContainer';
import FormContainer from './FormContainer';
import Clock from './Clock';
import ListContainer from './ListContainer';

class App extends React.Component{
  render(){
    return (
      <div className="col-md-4">
        <HeaderContainer />
        <FormContainer />
        <ListContainer />
        <MakeListButton name="Make List Item"/>
      </div>
    );
  }
}

export default App;

/*  */
