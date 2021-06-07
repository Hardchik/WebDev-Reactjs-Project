import React from "react";
import "../../public/./styles.css";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
//import styles from "./styles.css";
//export default function App() {}
function App() {
  return (
    <div className="App">
      <Header />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
