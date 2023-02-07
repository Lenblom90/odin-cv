import { useState } from "react";
import ContentItem from "./ContentItem";

export default function ContentSection({editMode, onEdit, items, defaultTitle}) {

  const [title, setTitle] = useState(defaultTitle);

  const listItems = items.map((item) => {
      return (
          <ContentItem key={item.id} className="ContentItem" item={item} editMode={editMode} onEdit={onEdit}/>
      )
    });

    const handleEdit = (e) => {
      if(e.key === "Enter"){
          setTitle(e.target.value);
          onEdit();
      }
    }


    if(!editMode){
      return (
        <div className="ContentSection">
          <h3>{title}</h3>
          <ul>{listItems}</ul>
        </div>
      );  
    } else {
      return (
        <div className="ContentSection">
          <input type="text" defaultValue={title} onKeyDown={handleEdit}/>
          <ul>{listItems}</ul>
        </div>
      );
    }
}
