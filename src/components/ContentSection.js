import { Component } from "react";

export default class ContentSection extends Component {
  constructor(props){
    super(props);
  }  

  render() {
    return (
      <div className="ContentSection">
        <h3>{this.props.title}</h3>
      </div>
    );
    }

}