import { Component } from "react";

export default class ContentItem extends Component {
    constructor(props){
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.state = {
            title: this.props.item.title,
            date: this.props.item.date,
            description: this.props.item.description
        }
    
    }

    handleEdit = (e) => {
        if(e.key === "Enter"){
            if(e.target.className === 'title'){
                this.setState((prevState) => {
                    return {
                        title: e.target.value,
                        date: prevState.date,
                        description: prevState.description
                    }
                })
            } else if(e.target.className === 'date'){
                this.setState((prevState) => {
                    return {
                        title: prevState.title,
                        date: e.target.value,
                        description: prevState.description
                    }
                })
            } else {
                this.setState((prevState) => {
                    return {
                        title: prevState.title,
                        date: prevState.date,
                        description: e.target.value        
                    }
                })

            }
          this.props.onEdit();
        }
      }
    
    
  render() {
    const editMode = this.props.editMode;
    const listItem = (
    <div>
        <h4>{this.state.title}</h4>
        <h5>{this.state.date}</h5>
        <p>{this.state.description}</p>
    </div>);
    const editItem = (
        <div>
            <input className="title" defaultValue={this.state.title} type="text" onKeyDown={this.handleEdit}/>
            <input className="date" defaultValue={this.state.date} type="text" onKeyDown={this.handleEdit}/>
            <input className="description" defaultValue={this.state.description} type="text" onKeyDown={this.handleEdit}/>
        </div>
    )
    return (
        <li>{editMode ? editItem : listItem}</li>
    );
    }

}
