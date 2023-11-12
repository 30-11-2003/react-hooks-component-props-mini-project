import React from "react";
import blogData from "../data/blog";
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <header><h1>{blogData.name}</h1></header>
      <aside><About/></aside>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
