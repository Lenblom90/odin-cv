import ContentSection from "./ContentSection";
import '../styles/Content.css'

export default function Content({editMode, onEdit}) {

  const job = [{id: "1",title:"title",date:"01-01-2000",description:"something interesting"}]
  const edu = [{id: "1",title:"title",date:"01-01-2000",description:"something interesting"}]
  const pub = [{id: "1",title:"title",date:"01-01-2000",description:"something interesting"}]    


  return (
    <div className="Content">
      <ContentSection editMode={editMode} defaultTitle="Employment History" items={job} onEdit={onEdit}/>
      <ContentSection editMode={editMode} defaultTitle="Education" items={edu} onEdit={onEdit}/>
      <ContentSection editMode={editMode} defaultTitle="Publications" items={pub} onEdit={onEdit}/>
    </div>
  );
}
