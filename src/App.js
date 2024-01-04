import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Examples from "./components/Examples";

function App() {
  const [selectedMenu, setSelectedMenu] = useState('');

  const meiji = {
      title: 'Meiji',
      players: [
          { name: 'Miyuki', position: 'Catcher' },
          // More characters...
      ]}

    const seidou = {
      title: 'Seidou',
        players: [
            { name: 'Sawamura', position: 'Pitcher' },
            // More characters...
        ]}



  //const tabsData = {
    //characters: [meiji, seidou], about: [meiji, seidou],
  //};


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
