import { Component } from "react";
import ContentSection from "./ContentSection";
import '../styles/Content.css'


export default class Content extends Component {
  constructor(props){
    super(props);
  }  

  render() {
    return (
      <div className="Content">
        <ContentSection title="Employment History"/>
        <ContentSection title="Education"/>
        <ContentSection title="Publications"/>
      </div>
    );
    }

}
