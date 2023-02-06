import { Component } from "react";
import SideSection from "./SideSection";
import '../styles/Sidebar.css';

export default class Sidebar extends Component {
  constructor(props){
    super(props);
  }  

  info = [{id: "1",title: "name", value: "me"}, {id:"2",title: "date of birth", value: "01-01-2000"}];
  skills = [{id: "1",title: "skill 1", value: "+++"}, {id:"2",title: "skill 2", value: "+"}];
  lang = [{id: "1",title: "English", value: "+++"}, {id:"2",title: "French", value: "+++"}];


  render() {
    const editMode = this.props.editMode;
    const onEdit = this.props.onEdit;

    return (
      <div className="Sidebar">
        <SideSection onEdit={onEdit} editMode={editMode} title="Info" items={this.info}/>
        <SideSection onEdit={onEdit} editMode={editMode} title="Skills" items={this.skills}/>
        <SideSection onEdit={onEdit} editMode={editMode} title="Languages" items={this.lang}/>
      </div>
    );
    }

}
