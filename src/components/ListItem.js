import { Component } from "react";

export default class ListItem extends Component{
  constructor(props){
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.state = {
        title: this.props.item.title,
        value: this.props.item.value
    }
  }

  handleEdit = (e) => {
    if(e.key === "Enter"){
        if(e.target.className === 'title'){
            this.setState((prevState) => {
                return {
                    title: e.target.value,
                    value: prevState.value
                }
            })
        } else {
            this.setState((prevState) => {
                return {
                    title: prevState.title,
                    value: e.target.value
                }
            })
        }
      this.props.onEdit();
    }
  }

  render(){
    const listItem = (
        <div className="SideItem">
          <label>{this.state.title} <span>{this.state.value}</span>
        </label>
        </div>
        );
      
     const editItem = (
          <div className="SideEdit">
              <input className="title" defaultValue={this.state.title} onKeyDown={this.handleEdit} />
              <input className="value" defaultValue={this.state.value} onKeyDown={this.handleEdit}/>
          </div>
        )
      
    const editMode = this.props.editMode;
    return (<li>
        {editMode ? editItem : listItem}
    </li>);
  }
}
