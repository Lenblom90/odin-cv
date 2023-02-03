import { Component } from "react";
import '../styles/Header.css';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.name,
      isEditable: false
    }  
  }  

  editText = () => {
    console.log(this.state.isEditable);
    this.setState(function(prevState, prevProps) {
      return {
        isEditable: !prevState.isEditable
      }});
  }

  handleInput = (e) => {
    if(e.key === "Enter"){
      this.setState((prevState, prevProps) => {
        return {
          name: e.target.value,
          isEditable: !prevState.isEditable
        }
      })
    }
  }

  render() {
    if(!this.state.isEditable){
      return (
        <div className="Header">
          <h1 onClick={this.editText} className="Header-text">{this.state.name}</h1>
        </div>
      );  
    } else {
      return (
        <div className="Header">
          <input type="text" placeholder={this.props.name} onKeyDown={this.handleInput} />
        </div>
      )
    }
    }

}
