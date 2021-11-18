import React from "react";
import "./App.css";
import { Editor } from "../../src";

import "@fortawesome/fontawesome-free/css/all.css";
import VerticalToolbar from "./components/VerticalToolbar/VerticalToolbar";
import HorizontalToolbar from "./components/HorizontalToolbar/HorizontalToolbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.editor = React.createRef();
  }
  render() {
    return (
      <div className="app">
        <HorizontalToolbar editor={this.editor} />
        <div className="container">
          <VerticalToolbar editor={this.editor} />
          <div className="editor">
            <Editor height="700" width="700" ref={this.editor} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
