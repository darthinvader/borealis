import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./components/Books/Books";
import CharacterSheet from "./components/CharacterSheet/CharacterSheet";
import Generators from "./components/Generators/Generators";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/books">
            <Books />
          </Route>
          <Route exact path="/generators">
            <Generators />
          </Route>
          <Route exact path="/characterSheet">
            <CharacterSheet />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
