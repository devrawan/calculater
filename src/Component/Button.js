import React, { Component } from "react";
import './Button.css';
class Button extends Component{
 
  render(){
    const onButtonClick = this.props.onButtonClick;
    const {content }= this.props;
    const {type} = this.props;
    return(
      <div className={`button ${content==="0" ? "zero" : ""} ${type || ""}`}   onClick={ () => {
        onButtonClick(  content , type)  
      }} >
    {content}
      </div>
    )
  }
}
export default Button;