import type { CharacterCounterProps } from "../../types";
import { TextInput } from '../TextInput/TextInput'
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";

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

    function handleTextChange (value: string) {
        const count = value.length;
        return count; // THIS IS JUST TEMPORARY TO AVOID ERRORS, YOU WILL LIKELY NEED TO CHANGE THIS LINE
    }

    return (
        <div>
            <TextInput onTextChange={handleTextChange} />
            <StatsDisplay stats={stats} showReadingTime={true} />
        </div>
    )
}

export { CharacterCounter };