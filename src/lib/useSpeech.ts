import { useState, useEffect } from 'react'
import { createSpeechEngine } from './speech';

const useSpeech = (sentences: Array<string>) => {
  /*
  Implement a custom useSpeech hook that uses a speech engine defined in 'speech.ts'
  to play the sentences that have been fetched and parsed previously.

  This hook should return react friendly controls for playing, and pausing audio as well as provide information about
  the currently read word and sentence
  */

  const [currentSentence, setCurrentSentence] = useState<string>('');
  const [currentWord, setCurrentWord] = useState<string>('');
  let currentSentenceIndex = 0;

  const onStateUpdate = (status: string): void => {
    if(status === "ended" &&  currentSentenceIndex + 1 < sentences.length){
      currentSentenceIndex = currentSentenceIndex + 1;
      setCurrentSentence(sentences[currentSentenceIndex]);
      const selectedWord = sentences[currentSentenceIndex].split(' ')[0]
      setCurrentWord(selectedWord);

      load(sentences[currentSentenceIndex]);
      play();
    }
  }

  let { state, play, pause, cancel, load } = createSpeechEngine({
    onBoundary: (e: SpeechSynthesisEvent):SpeechSynthesisEvent => e,
    onEnd: (e: SpeechSynthesisEvent):SpeechSynthesisEvent => e,
    onStateUpdate
  });

  useEffect(() => {
    if(sentences.length){
      setCurrentSentence(sentences[currentSentenceIndex]);
      const selectedWord = sentences[currentSentenceIndex].split(' ')[0];
      setCurrentWord(selectedWord);
      load(sentences[currentSentenceIndex]);
    }
  }, [sentences]);

  return {
    currentWord,
    currentSentence,
    controls: {
      state,
      play,
      pause,
      cancel,
      load
    }
  }
};

export { useSpeech };
