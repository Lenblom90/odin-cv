import SideSection from "./SideSection";
import '../styles/Sidebar.css';

export default function Sidebar({editMode, onEdit}) {

  const info = [{id: "1",title: "name", value: "me"}, {id:"2",title: "date of birth", value: "01-01-2000"}];
  const skills = [{id: "1",title: "skill 1", value: "+++"}, {id:"2",title: "skill 2", value: "+"}];
  const lang = [{id: "1",title: "English", value: "+++"}, {id:"2",title: "French", value: "+++"}];

  return (
    <div className="Sidebar">
      <SideSection onEdit={onEdit} editMode={editMode} defaultTitle="Info" items={info}/>
      <SideSection onEdit={onEdit} editMode={editMode} defaultTitle="Skills" items={skills}/>
      <SideSection onEdit={onEdit} editMode={editMode} defaultTitle="Languages" items={lang}/>
    </div>
  );
}
