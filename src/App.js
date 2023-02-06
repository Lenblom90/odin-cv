import { Component } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import './styles/App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      isEditable: false
    }
  }  

  handleEdit = () => {
    this.setState((prevState) => {
      return {
        isEditable: !prevState.isEditable
      }
    });
  }
  render() {
    const editMode = this.state.isEditable;

    return (
      <div className="App">
        <button onClick={this.handleEdit}>{this.state.isEditable ? "Done" : "Edit"}</button>
        <Header onEdit={this.handleEdit} editMode={editMode}/>
        <Sidebar onEdit={this.handleEdit} editMode={editMode}/>
        <Content onEdit={this.handleEdit} editMode={editMode}/>
      </div>
    );
    }

}
