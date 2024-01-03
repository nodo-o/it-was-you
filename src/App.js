import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Tab from './components/Tab';

function App() {
  const [selectedMenu, setSelectedMenu] = useState('');

  const tabsData = {
    characters: [
      { title: 'Character 1', content: 'Details about Character 1...' },
      // More characters...
    ],
    lore: [
      { title: 'Lore 1', content: 'Details about Lore 1...' },
      // More lore...
    ],
  };

  return (
      <div>
        <Header />
        <Menu onSelect={(menu) => setSelectedMenu(menu)} />
        {tabsData[selectedMenu]?.map((tab, index) => (
            <Tab key={index} title={tab.title} content={tab.content} />
        ))}
      </div>
  );
}

export default App;
