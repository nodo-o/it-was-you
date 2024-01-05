import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Examples from "./components/Examples";
import { MEIJI } from './characters.js';
import { SEIDOU } from './characters.js';
import Footer from "./components/Footer";

function App() {
  const [selectedMenu, setSelectedMenu] = useState(null);

    const handleSelect = (key) => {
        if (selectedMenu === key) {
            setSelectedMenu(null);  // Deselect if the same button is clicked
        } else {
            setSelectedMenu(key);  // Select the new button
        }
    };

  const meiji = MEIJI;
  const seidou = SEIDOU;


    const tabsData2 = {
        characters: {
            meiji: meiji,
            seidou: seidou
        },
        about: {
            meiji: meiji,
            seidou: seidou
        },
    };

  return (
      <div>
          <main>
        <Header />
              <Menu menuEntry={tabsData2} onSelect={handleSelect} selected={selectedMenu} />

              {selectedMenu && tabsData2[selectedMenu] ? (
              <Examples tab={tabsData2[selectedMenu]} />
          ) : (
              <div></div>
          )}
              <Footer />
          </main>

      </div>
  );
}

export default App;
