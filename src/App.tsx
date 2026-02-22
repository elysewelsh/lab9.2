import CharacterCounter from "./components/CharacterCounter/CharacterCounter"
// import { useState } from 'react'
// import type { TextStats } from './components/StatsDisplay/StatsDisplay'
// import { StatsDisplay } from "./components/StatsDisplay/StatsDisplay";
// import { TextInput } from "./components/TextInput/TextInput";
// import type { StatsDisplayProps } from "./types";



function App() {

  return (
    <>
    <CharacterCounter minWords={25} maxWords={100}/>
    </>
  )
  
}

export default App


// References:
// https://www.kindacode.com/article/how-to-create-a-word-counter-in-react-with-hooks