import { Component } from "react";
import ListItem from "./ListItem";

export default class SideSection extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const title = this.props.title;
    const editMode = this.props.editMode;

    const listItems = this.props.items.map((item) => {
      return (<ListItem key={item.id} editMode={this.props.editMode} item={item} onEdit={this.props.onEdit}/>)
    });
  

    if(editMode){
      return (
        <div className="SideSection">
          <input placeholder={title} />
          <ul>{listItems}</ul>
          </div>
      );
    }
    return (
      <div className="SideSection">
        <h3>{title}</h3>
        <ul>{listItems}</ul>
      </div>
    );
  }
}
