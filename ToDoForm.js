import React from 'react';
import ReactDOM from 'react-dom';

class ToDoForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: ' '
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){

    this.setState({value: event.target.value});
    alert(event.target.value);
  }

  render(){
    return(
      <div>
        <form className="App">
          <label>
            To do: <input type="text" name="to-do" value={this.state.value} onChange={this.handleChange}/>
          </label>
          // <input type="submit"  />
        </form>
      </div>
    );
  }
}

export default ToDoForm;
