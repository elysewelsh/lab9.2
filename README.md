# 📋 Character Counter

An application for analyzing text input and calculating statistics in real-time.

## 💻 Technologies Used

* **React:** Frontend library for building the user interface.
* **TypeScript:** For static typing of data objects and component props.
* **Tailwind CSS:** Utility-first framework for styling.

## ✨ Features

* **Real-time Analysis:** Calculates counts of characters, words, and seconds of reading time as the user types.
* **Limit Warnings:** Compares user input to pre-defined word and time limits to ensure limits are obeyed.

## 🏛️ Component Architecture

The container component (CharacterCounter) holds the centralized state for the text and calculated metrics. It passes callback functions down to the input component (TextInput) to receive raw string data, processes that data locally, and pushes the updated metrics down to the presentational component (StatsDisplay).

 ```       
                    [ App ]
            (Props: min/max counts)                             
                        │                    
                        ▼                    
              [ CharacterCounter ]               
           (State: text, stats object)           
              │                    │             
              ▼                    ▼             
      handleTextChange()      stats (data)       
              │                    │             
              ▼                    ▼             
        [ TextInput]       [ StatsDisplay ]   
```

## ⚙️ Installation

To run this project locally, execute the following commands in your terminal:

```bash
# Clone the repository
git clone https://github.com/elysewelsh/lab9.2.git

# Navigate into the directory
cd character-counter

# Install dependencies (React, TypeScript, Tailwind, etc.)
npm install

# Start the local development server
npm run dev
```

## 📖 References

* **Project References:** References and code citations within components
* **To Format README:** These templates gave me formatting advice and inspiration:
     - [Scrimba README template](https://github.com/elysewelsh/lab2.1/blob/main/README.md)
     - [Frontend Mentor README template](https://github.com/elysewelsh/sba3/blob/main/README-template.md)
     - [asciiflow.com](https://asciiflow.com/#/) made the flow diagram for the architecture

## 💖 Acknowledgements

Anyone in the list below has full access to this code and can fork or clone it because they directly contributed to it in some way. Permission has been given to use my repository as reference material to anyone else in class as well. 

* **Monique**
* **Pierre**

## 🧘 Reflections

1. How did you handle state updates when the text changed?
    >The handleTextChange callback function is passed from the parent CharacterCounter component to the TextInput child component. When there is input from a user, TextInput passes the string value up.When CharacterCounter receives the string, it uses it to calculate the statistics. The statistics are held as an object in the stats state and then get passed to StatsDisplay to be displayed.
1. What considerations did you make when calculating reading time?
    >In class, it was determined that the example shown used 3 words/minute. I continued with that calculation throughout the app. The app asked for readingTime to be in minutes, but I preferred to work with the information in seconds so it displayed easier and was even more dynamic.
    >
    >I initially used Math.floor to round the numbers, but it didn't seem to eliminate the decimals. I had to look at every location that referenced readingTime in order to ensure all the calculations wouldn't include decimals. In the end, I was able to display string values for the minutes and seconds.
1. How did you ensure the UI remained responsive during rapid text input?
    >In the beginning, I was using a separate state variable for everything displayed on the screen. I then determined that I wasn't using half of them and, if I created one variable based on the input/keystrokes, I could update all the reliant states with one handler function that takes in that one event. The entire logic is housed in one component too, so there is no passing and no cascading.
1. What challenges did you face when implementing the statistics calculations?
    >I didn't pay close enough attention to the types of data in the pre-defined interfaces, for one. I needed to re-write a lot of the code that relied on numbers because the interface asked for a string. Also, type guards were useful because some variables were threatening "undefined" errors. When I was calculating the minutes and seconds, I was stuck trying to use Math.floor. I wasn't doing the division before applying Math.floor, so it was still allowing decimals. The tenery operators for the conditional rendering gave trouble as well, but it wasn't complex, just tedious.