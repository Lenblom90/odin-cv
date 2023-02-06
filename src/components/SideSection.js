import { Component } from "react";
import SideItems from "./SideItems";

export default class SideSection extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const title = this.props.title;
    const items = this.props.items;
    const editMode = this.props.editMode;

    if(editMode){
      return (
        <div className="SideSection">
          <input placeholder={title} />
          <SideItems editMode={editMode} items={items}/>
        </div>
      );
    }
    return (
      <div className="SideSection">
        <h3>{title}</h3>
        <SideItems editMode={editMode} items={items}/>
      </div>
    );
  }
}
