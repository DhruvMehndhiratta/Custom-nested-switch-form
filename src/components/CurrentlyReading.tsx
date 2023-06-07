import { ReactNode } from "react";
// Implement a component that displays the currently read word and sentence
interface CurrentlyReadingProps {
  sentences: string[];
  currentWordIndex: number;
  currentSentenceIndex: number
}
export const CurrentlyReading = ({
  currentSentenceIndex,
  currentWordIndex = 0,
  sentences
}: CurrentlyReadingProps) => {
  const words = sentences?.length &&  sentences[currentSentenceIndex].split(" ") || [] as string[];

  return (
    <div className="currently-reading">
      <div>
        {words.map((item: string, index): any => {
          const isHighlighted = index === currentWordIndex;
          return (
            <span className={isHighlighted ? "highlight" : ""} key={item + index}>
              {item + " "}
            </span>
          );
        })}
      </div>
    </div>
  );
};
