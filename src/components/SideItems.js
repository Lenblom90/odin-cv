import { Component } from "react";

export default class SideItems extends Component{
  constructor(props){
    super(props);
  }

  listItems = this.props.items.map((item, index) => {
    return (<li key={index} className="SideItem">
      <label>
      {item.title} <span>{item.value}</span>
      </label>
    </li>)
  });

  editItems = this.props.items.map((item, index) => {
    return (<li key={index} className="SideEdit">
      <input placeholder={item.title}/>
      <input placeholder={item.value}/>
    </li>)
  });

  render(){
    const editMode = this.props.editMode;
    return (
      <ul>{editMode ? this.editItems : this.listItems}</ul>
    );
  }
}
