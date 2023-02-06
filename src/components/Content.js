import { Component } from "react";
import ContentSection from "./ContentSection";
import '../styles/Content.css'


export default class Content extends Component {
  constructor(props){
    super(props);
  }

  job = [{id: "1",title:"title",date:"01-01-2000",description:"something interesting"}]
  edu = [{id: "1",title:"title",date:"01-01-2000",description:"something interesting"}]
  pub = [{id: "1",title:"title",date:"01-01-2000",description:"something interesting"}]    


  render() {
    return (
      <div className="Content">
        <ContentSection editMode={this.props.editMode} title="Employment History" items={this.job} onEdit={this.props.onEdit}/>
        <ContentSection editMode={this.props.editMode} title="Education" items={this.edu} onEdit={this.props.onEdit}/>
        <ContentSection editMode={this.props.editMode} title="Publications" items={this.pub} onEdit={this.props.onEdit}/>
      </div>
    );
  }
}
