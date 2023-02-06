import { Component } from "react";
import '../styles/Header.css';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.state = {
      name: "Header Text",
    }  
  }  

  handleEdit(e) {
    if(e.key === "Enter"){
      this.setState(() => {
        return {
          name: e.target.value,
        }
      })
      this.props.onEdit();
    }
  }

  render() {
    if(!this.props.editMode){
      return (
        <div className="Header">
          <h1 className="Header-text">{this.state.name}</h1>
        </div>
      );  
    } else {
      return (
        <div className="Header">
          <input type="text" placeholder={this.state.name} onKeyDown={this.handleEdit} />
        </div>
      )
    }
    }

}
