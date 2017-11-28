import React from 'react';

/* One way of making a component is using function, however can't use States with funcs
function Clock(props){
  return (
    <div>
      <h1>Hello there,</h1>
      <h2>It is {props.date.toLocaleString}</h2>
    </div>
  );
}
*/

class Clock extends React.Component{
  constructor(props){
    super(props);

    this.state = { date: new Date() };
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
      date: new Date()
    });
  }

  render(){
    return (
      <div>
        <h1>Hello there,</h1>
        <h2>It is {this.state.date.toLocaleString()}</h2>
      </div>
    );
  }
}

export default Clock;
