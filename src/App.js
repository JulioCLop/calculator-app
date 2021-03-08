import './App.css';
import ButtonRows from "./components/ButtonRows"
import {  React, Component } from 'react';
import Input from  './components/input'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: ""
    };
  }
  render(){
  return (
    <div className="app">
      <div className="calc-wrappper">
      <Input input={this.state.input}/>
     <ButtonRows />
      </div>
    </div>
  )
  
}
}
export default App;
