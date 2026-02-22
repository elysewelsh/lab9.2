import type { CharacterCounterProps } from "../../types";
import TextInput from '../TextInput/TextInput'
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";
import { useState } from 'react';

function CharacterCounter ({minWords = 25, maxWords = 100, targetReadingTime = 0}: CharacterCounterProps) {

    const [stats, setStats] = useState({
        characterCount: 0,
        wordCount: 0,
        readingTime: 0, // in minutes
        minWords: 0,
        maxWords: 0,
        targetReadingTime: 0
    });

    function handleTextChange (inputValue: string) {
        const countCharacters: number = inputValue.length;
        const wordHolder: string[] = inputValue.split(' ');
        const countWords: number = wordHolder.length;
        const timedRead: number = (countWords/3);
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
    };
    return (
        <div>
            <TextInput onTextChange={handleTextChange} placeholder="Start typing..." initialValue="" />
            <StatsDisplay stats={stats} showReadingTime={stats.readingTime >= 1 ? true: false}/>
        </div>
    )
}

export default CharacterCounter