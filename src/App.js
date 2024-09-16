import React, { useState } from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu';
import Examples from "./components/Examples";
import {MEIJI, MAIN, SEIDO, OTHERS} from './characters.js';
import Footer from "./components/Footer/Footer";
import Tab from "./components/Tab";
import Tabs from "./components/Tabs";
import TabContent from "./components/TabContent";
import TextContent from "./components/TextContent";
import StoryComponent from "./components/StoryComponent";
import TriviaComponent from "./components/TriviaComponent";

function App() {
    const [selectedMenu, setSelectedMenu] = useState(null);

    const handleSelect = (key) => {
        if (selectedMenu === key) {
            setSelectedMenu(null);  // Deselect if the same button is clicked
        } else {
            setSelectedMenu(key);  // Select the new button
        }
    };

    const mainMenu = {
        story: {},
        characters: {
            meiji: MEIJI,
            exseidou: SEIDO,
            others: OTHERS
        },
        //trivia: {}
    };
  return (
      <div>
          <main>
        <Header />
              <Menu menuEntry={mainMenu} onSelect={handleSelect} selected={selectedMenu} />

              {!selectedMenu ? (
                  <div></div>
              ) : (
                  selectedMenu === 'characters' ? (
                      <Examples tab={mainMenu[selectedMenu]} />
                  ) : selectedMenu === 'trivia' ? (
                      <TriviaComponent />
                  ) : selectedMenu === 'story' ? (
                      <StoryComponent />
                  ) : (
                      <TextContent />
                  )
              )}


              <Footer />
          </main>

      </div>
  );
}

export default App;
