import { useState, useEffect } from "react";
import "./App.css";
import { Controls } from "./components/Controls";
import { CurrentlyReading } from "./components/CurrentlyReading";
import { fetchContent, parseContentIntoSentences } from "./lib/content";
import { useSpeech } from "./lib/useSpeech";

function App() {
  const [sentences, setSentences] = useState<Array<string>>([]);
  const { currentWord, currentSentence, controls } = useSpeech(sentences);
  useEffect(() => {
    fetchContent().then((res) => {
      const response = res as string;
      const output = parseContentIntoSentences(response) as string[];
      setSentences(output);
    });
  }, []);

  return (
    <div className="App">
      <div>
        <CurrentlyReading
          currentSentence={currentSentence}
          currentWord={currentWord}
        />
      </div>
      <div>{sentences.join(" ")}</div>
      <div>
        <Controls
          currentSentence={currentSentence}
          onLoad={controls.load}
          onPause={controls.pause}
          onPlay={controls.play}
        />
      </div>
    </div>
  );
}

export default App;
