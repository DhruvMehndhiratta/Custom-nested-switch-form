import { ReactNode } from "react";
// Implement a component that displays the currently read word and sentence
interface CurrentlyReadingProps {
  currentSentence: string;
  currentWord: string;
}
export const CurrentlyReading = ({
  currentSentence = "",
  currentWord = "",
}: CurrentlyReadingProps) => {
  const words = currentSentence.split(" ") as string[];
  const findWordIndex = words.findIndex(
    (item) => item === currentWord
  ) as number;
  return (
    <div className="currently-reading">
      <div>
        {words.map((item: string, index): any => {
          const isHighlighted = index === findWordIndex;
          return (
            <span className={isHighlighted ? "highlight" : ""} key={item}>
              {item + " "}
            </span>
          );
        })}
      </div>
    </div>
  );
};
