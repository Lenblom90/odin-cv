import { Component } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import './styles/App.css';

export default class App extends Component {
  constructor(){
    super();
  }  

  render() {
    return (
      <div className="App">
        <Header name="Header Text"/>
        <Sidebar />
        <Content />
      </div>
    );
    }

}
