import { Component } from "react";
import SideSection from "./SideSection";
import '../styles/Sidebar.css';

export default class Sidebar extends Component {
  constructor(props){
    super(props);
  }  

  render() {
    return (
      <div className="Sidebar">
        <SideSection title="Info"/>
        <SideSection title="Skills"/>
        <SideSection title="Languages"/>
      </div>
    );
    }

}
