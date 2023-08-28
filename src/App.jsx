import { useState } from 'react'
import './App.css'
import BtnPhrase from './components/BtnPhrase'
import Phrase from './components/Phrase'
import phrases from './utils/phrases.json'
import getRandomElemArray from './utils/getRandomElemArray'

function App() {

  const phraseRandom = getRandomElemArray(phrases)
  const numberRandom = getRandomElemArray([1,2 , 3, 4])

  const [quote, setQuote] = useState("  ")
  const [numberBg, setNumberBg] = useState(numberRandom)

  const bgStyle = {
    backgroundImage: `url(/fondo${numberBg}.jpg)` 
  }

  // const pStyle = {
  //   backgroundImage: `url(/rectangle1.svg)` 
  // }

  return (
    <div className='container' style={bgStyle}>
      <h1 className='container_title'>Fortune cookie</h1>
      
      <div className='container_img'>
        <Phrase phrase={quote} />
      </div>

      <BtnPhrase 
        quote={quote}
        setPhrase={setQuote}  
        phrases={phrases}
        number={numberBg}
        setNumberBg={setNumberBg}
      />

    </div>
  )
}

export default App
