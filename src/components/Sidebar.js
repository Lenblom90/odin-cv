import { Component } from "react";
import SideSection from "./SideSection";
import '../styles/Sidebar.css';

export default class Sidebar extends Component {
  constructor(props){
    super(props);
  }  

  info = [{title: "name", value: "me"}, {title: "date of birth", value: "01-01-2000"}];
  skills = [{title: "skill 1", value: "+++"}, {title: "skill 2", value: "+"}];
  lang = [{title: "English", value: "+++"}, {title: "French", value: "+++"}];

  render() {
    const editMode = this.props.editMode;
    return (
      <div className="Sidebar">
        <SideSection editMode={editMode} title="Info" items={this.info}/>
        <SideSection editMode={editMode} title="Skills" items={this.skills}/>
        <SideSection editMode={editMode} title="Languages" items={this.lang}/>
      </div>
    );
    }

}
