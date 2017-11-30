import React from 'react';
import HeaderContainer from './HeaderContainer';
import ListContainer from './ListContainer';
import Clock from './Clock';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = { time: new Date() };
    this.tick = this.tick.bind(this);
  }
  // Will set up a timer for the clock
  componentDidMount(){
    this.timerID = setInterval( ()=>this.tick(), 1000 );
  }

  // Will clear the timer when Clock is removed
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      time: new Date()
    });
  }

  render(){
    return (
      <div className="col-md-4">
        <HeaderContainer />
        <Clock time={this.state.time}/>
        <ListContainer time={this.state.time} />
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
