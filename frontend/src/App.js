import React from "react"
import Home from "./pages/HomePage"
import Search from "./pages/search"
import Select from "./pages/select"
import Bike from "./pages/Bike"
import Smallpetrol from "./pages/smallpetrol"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/search" exact component ={Search}/>
        <Route path="/select" exact component={Select}/>
        <Route path="/bike" exact  component={Bike}/>
        <Route path="/smallpetrol" exact component={Smallpetrol}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
