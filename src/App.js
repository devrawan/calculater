
import React, { Component } from "react";
import './App.css';
import Button from './Component/Button';
class App extends Component {

  operators = ".+-x/=";

  state = {
    value: "0",
    preNum: null,
    operator: null
  }



  handleButtonPress = (content, type) => {
    const number = parseFloat(this.state.value);
    //clear case

    switch (type) {
      case "function":
        this.handleFunction(content);
        break;

      case "operator":
        this.handleOperator(content);
        break;

      case "number":
        this.handleNumber(content);
        break;

      default:
        break;

    }
  }

  quationn = "";
  operator = null;
  operatorIndex = -1;

  handleNumber = (number) => {
    if (this.quationn[this.quationn.length - 1] == ".") {
      return;
    }
    this.quationn = this.quationn + "" + number;
    this.setState({ value: this.quationn });


  }


  handleOperator = (operator) => {

    if (this.quationn == "") {
      return;
    }
    console.log("this.quationn.length" + this.quationn.length + "  == this.operatorIndex " + this.operatorIndex);

    if (this.quationn.length - 1 == this.operatorIndex) {
      return;
    }
  
    if (this.operator == null) {
      this.operator = operator;
      this.quationn = this.quationn + "" + operator;
      this.operatorIndex = this.quationn.length - 1;
      this.setState({ value: this.quationn })

      return;
    }
    // TODO get num1 , num2 , 
    var num1 = this.quationn.substr(0, this.quationn.indexOf(this.operator));
    var num2 = this.quationn.substr(this.quationn.indexOf(this.operator) + 1, this.quationn.length);
    var result = this.compute(num1, num2, this.operator);
    console.log("num1: " + num1 + "   num2: " + num2 + " result : " + result);

    this.quationn = result;
    if (operator == "=") {

      this.operatorIndex = -1;
      this.setState({ value: this.quationn })

      this.operator = null;

    } else {

      this.quationn = this.quationn + "" + operator;
      this.setState({ value: this.quationn })
      this.operator = operator;
      this.operatorIndex = this.quationn.length - 1;
    }
  }

  handleFunction = (type) => {

    switch (type) {
      case "±":
        if (this.operators.includes(this.quationn[this.quationn.length - 1])) {
          return;
        }

        if (this.operatorIndex == -1) {
          var num1 = parseFloat(this.quationn) * -1;
          this.quationn = "" + num1;
          this.setState({ value: this.quationn });
        } else {
          var num134 = parseFloat(this.quationn.substr(0, this.operatorIndex));
          var operation = this.quationn[this.operatorIndex];
          var num2 = parseFloat(this.quationn.substr(this.operatorIndex + 1)) * -1;

          this.quationn = "" + num134 + "" + operation + "" + num2;
          console.log("quatiom:  " + this.quationn);
          this.setState({ value: this.quationn });


        }
        return;
case "AC":
  this.quationn = "";
  this.operator = null;
  this.setState({
    value:"0"
  })
return ;
case "%":
  var numm = parseFloat(this.quationn)
  numm= (numm / 100).toString()
  this.setState({
    value: numm
  })
  this.quationn = numm;

return;
      default:
        break;
    }

  }

  compute = (num1, num2, method) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (method) {

      case "×":
        return num1 * num2;

      case "+":

        return num1 + num2;

      case "−":

        return num1 - num2;
      case "/":

        return num1 / num2;
      default:
        break;
    }
  }



  render() {
    const val = this.state.value;
    return (
      <div className="App">
        <div className="cala-wrapper">
          <div className="display"> {this.state.value}</div>
          <div className="row">
            <Button onButtonClick={this.handleButtonPress} content="AC" type="function" />
            <Button onButtonClick={this.handleButtonPress} content="±" type="function" />
            <Button onButtonClick={this.handleButtonPress} content="%" type="function" />
            <Button onButtonClick={this.handleButtonPress} content="/" type="operator" />

          </div>
          <div className="row">
            <Button onButtonClick={this.handleButtonPress} content="7" type="number" />
            <Button onButtonClick={this.handleButtonPress} content="8" type="number" />
            <Button onButtonClick={this.handleButtonPress} content="9" type="number" />
            <Button onButtonClick={this.handleButtonPress} content="×" type="operator" />
          </div>
          <div className="row">
            <Button onButtonClick={this.handleButtonPress} content="4" type="number" />
            <Button onButtonClick={this.handleButtonPress} content="5" type="number" />
            <Button onButtonClick={this.handleButtonPress} content="6" type="number" />
            <Button onButtonClick={this.handleButtonPress} content="−" type="operator" />
          </div>
          <div className="row">
            <Button onButtonClick={this.handleButtonPress} content="1" type="number" />
            <Button onButtonClick={this.handleButtonPress} content="2" type="number" />
            <Button onButtonClick={this.handleButtonPress} content="3" type="number" />
            <Button onButtonClick={this.handleButtonPress} content="+" type="operator" />
          </div>
          <div className="row">
            <Button onButtonClick={this.handleButtonPress} content="0" type="number" />
            <Button onButtonClick={this.handleButtonPress} content="." type="number" />
            <Button onButtonClick={this.handleButtonPress} content="=" type="operator" />
          </div>
        </div>
      </div>
    )
  }
}
export default App;
