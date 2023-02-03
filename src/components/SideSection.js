import { Component } from "react";

export default class SideSection extends Component {
  constructor(props){
    super(props);
  }  

  render() {
    return (
      <div className="SideSection">
        <h3>{this.props.title}</h3>
      </div>
    );
    }

}
