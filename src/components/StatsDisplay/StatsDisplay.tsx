import type { StatsDisplayProps } from "../../types";

export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in seconds
}

function StatsDisplay ({stats, showReadingTime}: StatsDisplayProps) {
    let minutes: number = Math.floor(stats.readingTime/60);
    let seconds: number = (stats.readingTime % 60);
    let formatMinutes: string = minutes < 10 ? "0" + minutes.toString() :  minutes.toString();
    let formatSeconds: string = seconds < 10 ? "0" + seconds.toString() : seconds.toString();

    
    const limitNotice = {
        success: 'text-2xl text-center text-green-700',
        keepWorking: 'text-2xl text-center text-black-900',
        stopTyping: 'text-2xl text-center text-red-700'
    };

    return (
        <div className="flex flex-row gap-10 justify-center mt-4 p-4 border border-gray-300 rounded-lg">
            <div>
                <p className="text-center">Characters</p>
                <div className="text-2xl text-center">{stats.characterCount}</div>
            </div>
            <div className="">
                <p className="text-center">Words</p>
                <div className={stats.wordCount < stats.minWords ? limitNotice.keepWorking : stats.wordCount > stats.maxWords ? limitNotice.stopTyping : limitNotice.success}>{stats.wordCount}</div>
                <p className="text-center">Min: {stats.minWords} | Max: {stats.maxWords}</p>
            </div>
            <div>
                <p className="text-center">Reading Time</p>
                {showReadingTime ? (<div className={stats.readingTime < stats.targetReadingTime*60 ? limitNotice.keepWorking : stats.readingTime > stats.targetReadingTime*60 ? limitNotice.stopTyping : limitNotice.success}> {formatMinutes}:{formatSeconds} </div>) : <div className="text-2xl text-center"> 00:00 </div>}
                {(stats.targetReadingTime !== undefined && stats.targetReadingTime > 0) ? <div className="text-center"> Target Reading Time: {stats.targetReadingTime} minutes</div> : <div></div>}
            </div>
        </div>
    )
};

export {StatsDisplay};

// References: 

// https://www.tutorialspoint.com/How-to-convert-JavaScript-seconds-to-minutes-and-seconds

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor