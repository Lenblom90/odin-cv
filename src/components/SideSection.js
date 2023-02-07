import { useState } from "react";
import ListItem from "./ListItem";

export default function SideSection({defaultTitle, editMode, items, onEdit}) {
  const [title, setTitle] = useState(defaultTitle);

  const listItems = items.map((item) => {
    return (<ListItem key={item.id} editMode={editMode} item={item} onEdit={onEdit}/>)
  });

  const handleEdit = (e) => {
    if(e.key === "Enter"){
      setTitle(e.target.value);
      onEdit();
    }
  }

  if(editMode){
    return (
      <div className="SideSection">
        <input defaultValue={title} onKeyDown={handleEdit} />
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
