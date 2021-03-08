import './App.css';
import ButtonRows from "./components/ButtonRows"
import {  React, Component } from 'react';
import Input from  './components/input';
import Clear from './components/clear'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: ""
    };
  }


  addToInput = val => {
    this.setState({ input: this.state.input + val});

  render(){
  return (
    <div className="app">
      <div className="calc-wrappper">
      <Input input={this.state.input}/>
     <ButtonRows />
     <Clear />
      </div>
    </div>
  )
  
}
}
export default App;
