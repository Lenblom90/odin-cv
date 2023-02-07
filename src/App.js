import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import './styles/App.css';

export default function App() {
  const [isEditable, setEditable] = useState(false);

  const handleEdit = () => {
   setEditable(!isEditable)
  }

  return (
    <div className="App">
      <button onClick={handleEdit}>{isEditable ? "Done" : "Edit"}</button>
      <Header onEdit={handleEdit} editMode={isEditable}/>
      <Sidebar onEdit={handleEdit} editMode={isEditable}/>
      <Content onEdit={handleEdit} editMode={isEditable}/>
    </div>
  );
}
