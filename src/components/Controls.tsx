// Implement a component that provides basic UI options such as playing, pausing and loading new content
import { useState } from "react";

interface ControlsProps {
  onLoad: (text: string) => void;
  onPause: () => void;
  onPlay: () => void;
  currentSentence: string;
}

export const Controls = ({
  onLoad,
  onPause,
  onPlay,
  currentSentence,
}: ControlsProps) => {
  const [isPaused, setIsPaused] = useState(false);

  const handleUpdateIsPaused = (): void => {
    if (!isPaused) {
      onPlay();
    } else {
      onPause();
    }
    setIsPaused(!isPaused);
  };

  return (
    <div>
      <button onClick={handleUpdateIsPaused}>
        {!isPaused ? "Play" : `Pause`}
      </button>
      <button onClick={(): void => onLoad(currentSentence)}>
        Load Content
      </button>
    </div>
  );
};
