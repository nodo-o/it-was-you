import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Examples from "./components/Examples";

function App() {
  const [selectedMenu, setSelectedMenu] = useState('');

  const meiji = {
      title: 'Meiji',
      groups: {
          team: { title:'Team',
              players: [
                  { name: 'Miyuki Kazuya', role: 'Catcher', details: '3rd year | Pretty Boy', photo:'/Miyuki.PNG'},
                  { name: 'Kuramochi Youichi', role: 'Shortstop', details: '3rd year | Pretty Boy', photo:'/Mochi.JPG'}
                  // More characters...
              ]},
      coaches: {title: 'Coaches',
          players: [
        { name: 'Suzuki', position: 'Bullpen Coach' },
        { name: 'Yamamoto', position: 'Trainer' }
    ]},
      managers: {
              title: 'Managers',
          players: [
              { name: 'Watanabe Hisashi', role: 'Analyst', details: '3rd year | Pretty Boy', photo:'/Nabe.JPG'},
              // More characters...
          ]}
      }}


    const seidou = {
      title: 'Seidou',
        players: [
            { name: 'Takigawa Chris Yuu', role: 'Catcher', details: 'Orix Buffaloes', photo:'/Chris.JPG'},
            // More characters...
        ]}


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
