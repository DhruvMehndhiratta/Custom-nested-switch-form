import { useState, useEffect } from "react";
import { createSpeechEngine } from "./speech";

const useSpeech = (sentences: Array<string>) => {
  /*
  Implement a custom useSpeech hook that uses a speech engine defined in 'speech.ts'
  to play the sentences that have been fetched and parsed previously.

  This hook should return react friendly controls for playing, and pausing audio as well as provide information about
  the currently read word and sentence
  */

  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState<number>(0);

  const onStateUpdate = (status: string): void => {
    // console.log(status, "status >>>") // playing | paused | ended
  };

  const onEnd = (): void => {
    if(currentSentenceIndex < sentences.length - 1){
      setCurrentWordIndex(0);
      setCurrentSentenceIndex((prevState) => prevState + 1);
    }
  };

  const onBoundary = (): void => {
    // console.log("on boundary", isPaused)
    // if (!isPaused) {
      setCurrentWordIndex((prevState) => prevState + 1);
    // }
  };

  let { state, play, pause, cancel, load } = createSpeechEngine({
    onBoundary,
    onEnd,
    onStateUpdate,
  });

  useEffect(() => {
    if (sentences.length) {
      load(sentences[currentSentenceIndex]);
      play();
    }
  }, [sentences.length]);

  useEffect(() => {
    load(sentences[currentSentenceIndex]);
    play();
  }, [currentSentenceIndex])

  return {
    currentWordIndex,
    controls: {
      state,
      play,
      pause,
      cancel,
      load,
    },
    currentSentenceIndex,
    setCurrentSentenceIndex,
    setCurrentWordIndex
  };
};

export { useSpeech };
