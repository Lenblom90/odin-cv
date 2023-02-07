import { useState } from "react";
import '../styles/Header.css';

export default function Header({editMode,onEdit}) {
  const [name, setName] = useState("Header Text");

  const handleEdit = (e) => {
    if(e.key === "Enter"){
      setName(e.target.value)
      onEdit();
    }
  }

    if(!editMode){
      return (
        <div className="Header">
          <h1 className="Header-text">{name}</h1>
        </div>
      );  
    } else {
      return (
        <div className="Header">
          <input type="text" defaultValue={name} onKeyDown={handleEdit} />
        </div>
      )
    }
}
