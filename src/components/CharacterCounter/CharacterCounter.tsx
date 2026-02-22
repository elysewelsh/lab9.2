import type { CharacterCounterProps } from "../../types";
import { TextInput } from '../TextInput/TextInput'
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";
import { useState } from 'react';

// CharacterCounter Component
// export interface CharacterCounterProps {
//   minWords?: number;
//   maxWords?: number;
//   targetReadingTime?: number; // in minutes
// }

function CharacterCounter ({minWords = 25, maxWords = 100, targetReadingTime = 0}: CharacterCounterProps) {

    // const stats = {
    //     characterCount: 0,
    //     wordCount: 0,
    //     readingTime:0,
    //     minWords: minWords,
    //     maxWords: maxWords,
    //     targetReadingTime: targetReadingTime
    // };

    const [text, setText] = useState('');
    // const [charCount, setCharCount] = useState(0);
    // const [wordCount, setWordCount] = useState(0);
    const [stats, setStats] = useState({
        characterCount: 0,
        wordCount: 0,
        readingTime: 0, // in minutes
        minWords: 0,
        maxWords: 0,
        targetReadingTime: 0
    });

    // setStats((prevStatsState) => {return {
    //     ...prevStatsState, 
    //     minWords: minWords,
    //     maxWords: maxWords,
    //     targetReadingTime: targetReadingTime
    //     };

    function handleTextChange (e) {
        const inputValue = e.target.value;
        const countCharacters = inputValue.length;
        const wordHolder: string[] = text.split(' ');
        const countWords = wordHolder.length;
        const timedRead = (countWords/3);

        setText(inputValue);
        // setCharCount(countCharacters);
        // setWordCount(countWords);
        setStats((prevStatsState) => {return {
            ...prevStatsState, 
            characterCount: countCharacters,
            wordCount: countWords,
            readingTime: timedRead,
            minWords: minWords,
            maxWords: maxWords,
            targetReadingTime: targetReadingTime
            };
        });
}

    return (
        <div>
            <TextInput onTextChange={handleTextChange} placeholder="Start typing..." initialValue="" />
            <StatsDisplay stats={stats} showReadingTime={stats.readingTime >= 1 ? true: false}/>
        </div>
    )
}

export { CharacterCounter };