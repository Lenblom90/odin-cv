import { Component } from "react";
import '../styles/Header.css';

export default class Header extends Component {
  constructor(props){
    super(props);
  }  

  render() {
    return (
      <div className="Header">
        <h1 className="Header-text">{this.props.name}</h1>
      </div>
    );
    }

}
