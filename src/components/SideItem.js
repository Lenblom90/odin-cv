import { Component } from "react";

export default class SideItem extends Component {
  constructor(props){
    super(props);
  }  

  render() {
    return (
      <div className="SideItem">
        <label>
            {this.props.title}
            <span>{this.props.value}</span>
        </label>
      </div>
    );
    }

}
