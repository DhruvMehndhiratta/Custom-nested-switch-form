// Implement a component that provides basic UI options such as playing, pausing and loading new content
import { useState } from "react";

interface ControlsProps {
  onLoad: () => void;
  onPause: () => void;
  onPlay: () => void;
  sentences: string[];
  currentSentenceIndex: number;
  currentWordIndex: number;
  onResume: (text: string) => void;
  setCurrentSentenceIndex: (id: number) => void;
  setCurrentWordIndex: (id: number) => void;
}

export const Controls = ({
  onLoad,
  onPause,
  onPlay,
  sentences,
  currentSentenceIndex,
  currentWordIndex,
  onResume,
  setCurrentSentenceIndex,
  setCurrentWordIndex,
}: ControlsProps) => {
  const [currentMode, setCurrentMode] = useState<string>("initial");
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const handleUpdateIsPaused = (): void => {
    if (currentMode === "initial") {
      setCurrentMode("playing");
      onPlay();
    } else if (currentMode === "playing") {
      setCurrentMode("pause");
      onPause();
    } else if (currentMode === "pause") {
      const remainingSentence = sentences[currentSentenceIndex]
        .split(" ")
        .slice(currentWordIndex - 1)
        .join(" ");
      if (!remainingSentence) {
        setCurrentSentenceIndex(currentSentenceIndex + 1);
        onResume(sentences[currentSentenceIndex + 1]);
      } else {
        onResume(remainingSentence);
      }
      onPlay();
      setCurrentMode("playing");
    }
    setIsPaused(!isPaused);
  };

  const onReloadContent = (): void => {
    onLoad();
    setCurrentSentenceIndex(0);
    setCurrentWordIndex(0);
  };

  return (
    <div>
      <button onClick={handleUpdateIsPaused}>
        {!isPaused ? "Play" : `Pause`}
      </button>
      <button onClick={onReloadContent}>Load Content</button>
    </div>
  );
};
