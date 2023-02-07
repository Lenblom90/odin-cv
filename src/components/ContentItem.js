import { useState } from "react";

export default function ContentItem({item, editMode, onEdit}) {
    const [title, setTitle] = useState(item.title);
    const [date, setDate] = useState(item.date);
    const [description, setDescription] = useState(item.description);    

    const handleEdit = (e) => {
        if(e.key === "Enter"){
            if(e.target.className === 'title'){
                setTitle(e.target.value);
            } else if(e.target.className === 'date'){
                setDate(e.target.value);
            } else {
                setDescription(e.target.value);
            }
            onEdit();
        }
    }
    
    const listItem = (
        <div>
            <h4>{title}</h4>
            <h5>{date}</h5>
            <p>{description}</p>
        </div>);
    const editItem = (
        <div>
            <input className="title" defaultValue={title} type="text" onKeyDown={handleEdit}/>
            <input className="date" defaultValue={date} type="text" onKeyDown={handleEdit}/>
            <input className="description" defaultValue={description} type="text" onKeyDown={handleEdit}/>
        </div>
    )

    return (
        <li>{editMode ? editItem : listItem}</li>
    );
}
