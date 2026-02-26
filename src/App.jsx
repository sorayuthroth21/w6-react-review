import pnLogo from "./assets/pn-logo.png";
import Header from "./components/Header";

import { HTML_RESULTS } from "./data.js";
import { JAVA_RESULTS } from "./data.js";
import { PYTHON_RESULTS } from "./data.js";
import { ENGLISH_RESULTS } from "./data.js";
import Scores from "./components/Scores.jsx";

function App() {
  return (
    <>
      <Header name = "Students results for PNC batch 2024"/>

      <main className="scores-container">
        <Scores courseName={"HTML"} courseResults={HTML_RESULTS}/>
        <Scores courseName={"ENGLISH"} courseResults={ENGLISH_RESULTS}/>
        <Scores courseName={"PYTHON"} courseResults={PYTHON_RESULTS}/>
        <Scores courseName={"JAVA"} courseResults={JAVA_RESULTS}/>


      </main>
    </>
  );
}

export default App;




