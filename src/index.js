import React, {Component} from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  render(){

  return (
    <div className="App">
      <h2>Hello</h2>
    </div>
  );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
