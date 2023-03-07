import "./App.css";
import { PhotoViewer } from "./components/PhotoViewer";

function App() {
  // Create a state that is called imageUrl

  return (
    <div className="App">
      <PhotoViewer imageUrl={imageUrl} />
    </div>
  );
}

export default App;
