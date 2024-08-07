import { useState } from "react";
import "./App.scss";

function App() {
  const [content, setContent] = useState("");
  const handleChange = (e) => {
    setContent(handleConvert(e.target.value));
  };

  const handleConvert = (text) => {
    const chars = text.split(" ");

    return chars
      .map((c) => {
        return "nh" + c.slice(1);
      })
      .join(" ");
  };
  return (
    <div className="App">
      <div className="content">
        <div
          className="text"
          style={{
            border: "1px solid #000",
            width: "100%",
            padding: "1rem",
          }}
        >
          {content}
        </div>
        <textarea
          placeholder="input here"
          style={{
            width: "100%",
          }}
          onChange={handleChange}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzvR70xsTJDyvWBDikDIvasJT-qN7I23KI9Q&s"
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
