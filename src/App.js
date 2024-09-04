import React from "react";
import TermsOfService from "./component/TermsOfService.js"; 
import Content from "./component/Content.js";

function App() {
  return (
    <div className="grid grid-cols-1 gap-0 bg-white">
      <TermsOfService />
      <Content />
    </div>
  );
}

export default App;