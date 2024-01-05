import { useState } from 'react';

import TabButton from './TabButton.js';
import Section from './Section.js';
import Tabs from './Tabs.js';
import Tab from "./Tab";

export default function Examples({tab}) {
  const [selectedTopic, setSelectedTopic] = useState();
  console.log(tab)

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p></p>;



    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                {tab[selectedTopic].groups
                    ? <Examples tab={tab[selectedTopic].groups} />
                    : <Tab players={tab[selectedTopic].players} />
                }
            </div>
        );
    }

  return (
      //loop for every key
    <Section title="" id="examples">
        <Tabs
            buttons={
                <>
                    {Object.keys(tab).map((key) => (
                        <TabButton
                            key={key}
                            isSelected={selectedTopic === key}
                            onClick={() => handleSelect(key)}
                        >
                            {tab[key].title}
                        </TabButton>
                    ))}
                </>
            }
        >
            {tabContent}
        </Tabs>
    </Section>
  );
}
