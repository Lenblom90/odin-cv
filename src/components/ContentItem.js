import { Component } from "react";

export default class ContentItem extends Component {
    constructor(props){
        super(props);
    }

    listItems = this.props.items.map((item, index) => {
        return (
            <li key={index} className="ContextItem">
                <h4>{item.title}</h4>
                <h5>{item.date}</h5>
                <p>{item.description}</p>
            </li>)        
      });

    editItems = this.props.items.map((item, index) => {
        return (
            <li key={index} className="ContextInput">
                <input placeholder={item.title} type="text"/>
                <input placeholder={item.date}/>
                <input placeholder={item.description}/>
            </li>
        );
    })
    
  render() {
    const editMode = this.props.editMode;
    return (
        <ul>{editMode ? this.editItems : this.listItems}</ul>
    );
    }

}
