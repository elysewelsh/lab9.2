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
                {showReadingTime && (<div className="calculation">{stats.readingTime}</div>)}
            </div>
        </div>
    )
}

export {StatsDisplay};