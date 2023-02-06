import { Component } from "react";
import ContentItem from "./ContentItem";

export default class ContentSection extends Component {
  constructor(props){
    super(props);
  }  

  render() {
    const editMode = this.props.editMode;
    const items = this.props.items;
    if(!editMode){
      return (
        <div className="ContentSection">
          <h3>{this.props.title}</h3>
          <ContentItem editMode={editMode} items={items}/>
        </div>
      );  
    } else {
      return (
        <div className="ContentSection">
          <input type="text" placeholder={this.props.title}/>
          <ContentItem editMode={editMode} items={items}/>
        </div>
      );
    }
    }

}
