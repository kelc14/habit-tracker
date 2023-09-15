import logo from "./logo.svg";
import Nav from "./Nav";
import Habit from "./Habit";
import "./App.css";

const HABITS = ["run", "take vitamins"];

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="App-habits">
        {/* for each habit, map them to a "button" */}
        {HABITS.map((h) => (
          <Habit habit={h} />
        ))}
      </div>

      <button>+</button>
    </div>
  );
}

export default App;
