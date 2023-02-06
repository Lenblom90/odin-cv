import { Component } from "react";
import ContentSection from "./ContentSection";
import '../styles/Content.css'


export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      job: [{title:"title",date:"01-01-2000",description:"something interesting"}],
      edu: [{title:"title",date:"01-01-2000",description:"something interesting"}],
      pub: [{title:"title",date:"01-01-2000",description:"something interesting"}]    
    }
  }

  render() {
    return (
      <div className="Content">
        <ContentSection editMode={this.props.editMode} title="Employment History" items={this.state.job}/>
        <ContentSection editMode={this.props.editMode} title="Education" items={this.state.edu}/>
        <ContentSection editMode={this.props.editMode} title="Publications" items={this.state.pub}/>
      </div>
    );
  }
}
