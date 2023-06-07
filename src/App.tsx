import { useState, useEffect } from "react";
import "./App.css";
import { Controls } from "./components/Controls";
import { CurrentlyReading } from "./components/CurrentlyReading";
import { fetchContent, parseContentIntoSentences } from "./lib/content";
import { useSpeech } from "./lib/useSpeech";

function App() {
  const [sentences, setSentences] = useState<Array<string>>([]);
  const {
    currentWordIndex,
    controls,
    currentSentenceIndex,
    setCurrentSentenceIndex,
    setCurrentWordIndex
  } = useSpeech(sentences);

  const fetchStatements = (): void => {
    fetchContent().then((res) => {
      const response = res as string;
      const output = parseContentIntoSentences(response) as string[];
      setSentences(output);
    });
  };
  useEffect(() => {
    fetchStatements();
  }, []);

  return (
    <div className="App">
      <div>
        <CurrentlyReading
           currentSentenceIndex={currentSentenceIndex}
          sentences={sentences}
          currentWordIndex={currentWordIndex}
        />
      </div>
      <div>{sentences.join(" ")}</div>
      <div>
        <Controls
          onResume={controls.load}
          onLoad={fetchStatements}
          onPause={controls.pause}
          onPlay={controls.play}
          currentSentenceIndex={currentSentenceIndex}
          currentWordIndex={currentWordIndex}
          sentences={sentences}
          setCurrentSentenceIndex={setCurrentSentenceIndex}
          setCurrentWordIndex={setCurrentWordIndex}
        />
      </div>
    </div>
  );
}

export default App;
