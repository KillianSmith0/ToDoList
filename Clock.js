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
  render(){
    return (
      <div>
        <h1>Hello there,</h1>
        <h2>It is {this.props.time.toLocaleString()}</h2>
      </div>
    );
  }
}

export default Clock;
