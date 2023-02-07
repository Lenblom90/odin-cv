import { Component, useState } from "react";

export default function ListItem({item, editMode, onEdit}){
  const [title, setTitle] = useState(item.title);
  const [value, setValue] = useState(item.value);

  const handleEdit = (e) => {
    if(e.key === "Enter"){
        if(e.target.className === 'title'){
          setTitle(e.target.value);
        } else {
          setValue(e.target.value);
        }
      onEdit();
    }
  }

  const listItem = (
    <div className="SideItem">
      <label>{title} <span>{value}</span>
      </label>
      </div>
      );
    
  const editItem = (
    <div className="SideEdit">
      <input className="title" defaultValue={title} onKeyDown={handleEdit} />
      <input className="value" defaultValue={value} onKeyDown={handleEdit}/>
      </div>
    );
  
    return (
    <li>
      {editMode ? editItem : listItem}
    </li>);
}
