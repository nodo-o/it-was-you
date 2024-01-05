import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Examples from "./components/Examples";
import { MEIJI } from './characters.js';
import { SEIDOU } from './characters.js';

function App() {
  const [selectedMenu, setSelectedMenu] = useState('');

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
          <Menu menuEntry={tabsData2} onSelect={(menu) => setSelectedMenu(menu)} />
          {selectedMenu && tabsData2[selectedMenu] ? (
              <Examples tab={tabsData2[selectedMenu]} />
          ) : (
              <div>Select a menu item</div>
          )}
          </main>
      </div>
  );
}

export default App;
