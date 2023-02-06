import { Component } from "react";
import ContentItem from "./ContentItem";

export default class ContentSection extends Component {
  constructor(props){
    super(props);
  }  

  render() {
    const editMode = this.props.editMode;
    const onEdit = this.props.onEdit;
    const listItems = this.props.items.map((item) => {
      return (
          <ContentItem key={item.id} className="ContentItem" item={item} editMode={editMode} onEdit={onEdit}/>
      )
    });

    if(!editMode){
      return (
        <div className="ContentSection">
          <h3>{this.props.title}</h3>
          <ul>{listItems}</ul>
        </div>
      );  
    } else {
      return (
        <div className="ContentSection">
          <input type="text" placeholder={this.props.title}/>
          <ul>{listItems}</ul>
        </div>
      );
    }
    }

}
