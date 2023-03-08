import { useEffect, useState } from "react";
import "./App.css";
import { PhotoViewer } from "./components/PhotoViewer";

function App() {
  const [image, setImage] = useState({ url: "", description: "" });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/1")
      .then((res) => res.json())
      .then((data) => {
        setImage({ description: data.title, url: data.url });
      });
  }, []);

  return (
    <div className="App">
      {image.url && (
        <PhotoViewer imageUrl={image.url} description={image.description} />
      )}
    </div>
  );
}

export default App;
