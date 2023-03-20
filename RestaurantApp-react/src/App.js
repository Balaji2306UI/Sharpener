import React from "react";

import Header from "./components/Header";
import HeaderSummary from "./components/HeaderSummary";
import './css/styles.css'

function App() {
  return (
    <React.Fragment>
      <Header title="Chef's Kitchen"/>
      <HeaderSummary />
    </React.Fragment>
  );
}

export default App;
