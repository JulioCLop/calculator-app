import React from "react"
import "./button.css"
import Button from "./button"


function ButtonRows(){

    return <div>
    <div className="row">
        <Button handleClick={this.addToInput}>7</Button>
        <Button handleClick={this.addToInput}>8</Button>
        <Button handleClick={this.addToInput}>9</Button>
        <Button handleClick={this.addToInput}>/</Button>
        
      </div>
    <div className="row">
        <Button handleClick={this.addToInput}>4</Button>
        <Button handleClick={this.addToInput}>5</Button>
        <Button handleClick={this.addToInput}>6</Button>
        <Button handleClick={this.addToInput}>X</Button>
        
      </div>
    <div className="row">
        <Button handleClick={this.addToInput}>1</Button>
        <Button handleClick={this.addToInput}>2</Button>
        <Button handleClick={this.addToInput}>3</Button>
        <Button handleClick={this.addToInput}>+</Button>
        
      </div>
      <div className="row">
        <Button handleClick={this.addToInput}>.</Button>
        <Button handleClick={this.addToInput}>0</Button>
        <Button handleClick={this.addToInput}>=</Button>
        <Button handleClick={this.addToInput}>-</Button>
      </div>
    </div>
}

export default ButtonRows;

