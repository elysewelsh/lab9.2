import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter"
import { useState } from 'react'
import type { TextStats } from './components/StatsDisplay/StatsDisplay'
import { StatsDisplay } from "./components/StatsDisplay/StatsDisplay";
import { TextInput } from "./components/TextInput/TextInput";
import type { StatsDisplayProps } from "./types";

const [text, setText] = useState('');
const [charCount, setCharCount] = useState(0);
const [wordCount, setWordCount] = useState(0);
const [stats, setStats] = useState(
    {
  characterCount: 0,
  wordCount: 0,
  readingTime: 0 // in minutes
});

function handleTextChange (e) {
    const inputValue = e.target.value;
    const countCharacters = inputValue.length;
    const wordHolder: string[] = text.split(' ');
    const countWords = wordHolder.length;
    const timedRead = (countWords/3);

    setText(inputValue);
    setCharCount(countCharacters);
    setWordCount(countWords);
    setStats((prevStatsState) => {return {
        ...prevStatsState, 
        characterCount: countCharacters,
        wordCount: countWords,
        readingTime: timedRead
        };
    });
}

function App() {

  return (
    <>
    <TextInput onTextChange={handleTextChange} placeholder="Start typing..." initialValue="" />
    <StatsDisplay stats={stats} showReadingTime={stats.readingTime >= 1 ? true: false}/>
    </>
  )
  
}

export default App


// References:
// https://www.kindacode.com/article/how-to-create-a-word-counter-in-react-with-hooks