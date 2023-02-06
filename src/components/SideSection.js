import { Component } from "react";
import SideItem from "./SideItem";

export default class SideSection extends Component {
  constructor(props){
    super(props);
  }  

  render() {
    return (
      <div className="SideSection">
        <h3>{this.props.title}</h3>
        <SideItem title="skill 1" value="+++"/>
      </div>
    );
    }

}
