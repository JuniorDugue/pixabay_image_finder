import React, {Component} from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/navbar/NavBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./styles.css";
// import { MuiThemeProvider } from "material-ui/styles";
import Search from "./components/search/Search";

class App extends Component {
  render(){

  return (
    <MuiThemeProvider className="App">
      <NavBar/>
      <Search/>
    </MuiThemeProvider>
  );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
