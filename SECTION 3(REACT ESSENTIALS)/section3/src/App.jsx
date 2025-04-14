// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Components } from "./components/components";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import { Header } from "./components/Header/Header";
import { TabButton } from "./TabButton.jsx";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("components");

  function handleselect(tab) {
    setSelectedTab(tab);
  }

  return (
    <>
      <div>
        <header>
          <Header />
          <Components {...CORE_CONCEPTS[0]} />
          <Components {...CORE_CONCEPTS[1]} />
          <Components {...CORE_CONCEPTS[2]} />
          <Components {...CORE_CONCEPTS[3]} />
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </header>
        <main>
          <h2>Time to Get Started</h2>
        </main>

        <TabButton onSelect={() => handleselect("components")}>
          Components
        </TabButton>
        <TabButton onSelect={() => handleselect("jsx")}>jsx</TabButton>
        <TabButton onSelect={() => handleselect("props")}>props</TabButton>
        <TabButton onSelect={() => handleselect("state")}>State</TabButton>

        <div>
          <h2>{EXAMPLES[selectedTab].title}</h2>
          <p>{EXAMPLES[selectedTab].description}</p>
        </div>
      </div>
    </>
  );
}

export default App;
