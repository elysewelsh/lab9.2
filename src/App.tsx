import CharacterCounter from "./components/CharacterCounter/CharacterCounter"

function App() {

  return (
    <>
    <CharacterCounter minWords={350} maxWords={500} targetReadingTime={2}/>
    </>
  )
  
}

export default App


// References:

// https://www.kindacode.com/article/how-to-create-a-word-counter-in-react-with-hooks