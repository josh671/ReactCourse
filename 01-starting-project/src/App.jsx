import { CORE_CONCEPTS } from './data.js'
import Header from './Components/Header.jsx'
import CoreConcept from './Components/CoreConcepts.jsx'
import TabButton from './Components/TabButton.jsx'
import { useState } from 'react'
function App() {
const [selectedTopic, setSelectedTopic ] = useState('Please click a button'); 

  
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />

            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* OnSelect is the name of the onClick handler set in the TabButton component */}
            {/* we can also pass an anonymous arrow function that wont go off when the 
                the TabButton is parsed but when the TabButton is selected. 

                It also contains in the () a string selector which is the paramater we are passing into 
                handleSelect()
            */}
            <TabButton onSelect={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
          </menu>
          {/* dynamic content we want to change when TabButtons are selected */}
          {selectedTopic}
        </section>
      </main>
    </div>
  )
}

export default App
