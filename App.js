import React from 'react';
// import NavBar from './NavBar';
import MakeListButton from './MakeListButton';
import HeaderContainer from './HeaderContainer';
import Clock from './Clock';
import ListContainer from './ListContainer';

class App extends React.Component{
  render(){
    return (
      <div className="col-md-4">
        <HeaderContainer />
        <ListContainer />
        <MakeListButton name="Make List Item"/>
      </div>
    );
  }
}

export default App;

/*
 It works because in JavaScript, true && expression always evaluates to expression,
 and false && expression always evaluates to false.

 Therefore, if the condition is true, the element right after && will appear
  in the output. If it is false, React will ignore and skip it.
  */
