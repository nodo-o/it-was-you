import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Examples from "./components/Examples";
import { MEIJI, MAIN, SEIDOU } from './characters.js';
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

    const tabsData2 = {
        characters: {
            main: MAIN,
            meiji: MEIJI,
            seidou: SEIDOU
        }
    };
/*
    const tabsData2 = {
        characters: {
            main: MAIN,
            meiji: MEIJI,
            seidou: SEIDOU
        },
        about: {
            meiji: MEIJI,
            seidou: SEIDOU
        },
    };
*/
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
