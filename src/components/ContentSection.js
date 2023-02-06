import { Component } from "react";
import ContentItem from "./ContentItem";

export default class ContentSection extends Component {
  constructor(props){
    super(props);
  }  

  render() {
    return (
      <div className="ContentSection">
        <h3>{this.props.title}</h3>
        <ContentItem />
      </div>
    );
    }

}
