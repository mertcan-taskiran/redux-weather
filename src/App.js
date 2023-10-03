import "./App.css";
import Cities from "./components/cities";
import Weather from "./components/weather";

function App() {
  return (
    <div className="App" style={{ backgroundImage: 'url(/hd.jpg)' }}>
      <Cities />
      <Weather />
    </div>
  );
}

export default App;
