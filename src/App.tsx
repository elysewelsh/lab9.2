import CharacterCounter from "./components/CharacterCounter/CharacterCounter"

function App() {

  return (
    <>
    <CharacterCounter minWords={250} maxWords={400} targetReadingTime={4}/>
    </>
  )
  
}

export default App


// References:

// https://www.kindacode.com/article/how-to-create-a-word-counter-in-react-with-hooks