import type { StatsDisplayProps } from "../../types";

// StatsDisplay Component
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}
// export interface StatsDisplayProps {
//   stats: TextStats;
//   showReadingTime?: boolean;
// }

function StatsDisplay ({stats, showReadingTime}: StatsDisplayProps) {
    let minutes: number = Math.floor(stats.readingTime)/60;
    let seconds: number = stats.readingTime % 60;
    let formatMinutes: string = minutes < 10 ? "0" + minutes.toString() :  minutes.toString();
    let formatSeconds: string = seconds < 10 ? "0" + seconds.toString() : seconds.toString();



    return (
        <div className="flex flex-row gap-4 mt-4 p-4 border border-gray-300 rounded-lg">
            <div>
                <p>Characters</p>
                <div className="calculation">{stats.characterCount}</div>
            </div>
            <div>
                <p>Words</p>
                <div className="calculation">{stats.wordCount}</div>
                <p>Min: {stats.minWords} | Max: {stats.maxWords}</p>
            </div>
            <div>
                <p>Reading Time</p>
                {showReadingTime && (<div className="calculation"> {formatMinutes}:{formatSeconds} </div>)}
            </div>
        </div>
    )
}

export {StatsDisplay};

// References: https://www.tutorialspoint.com/How-to-convert-JavaScript-seconds-to-minutes-and-seconds