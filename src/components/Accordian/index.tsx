import { FC, ReactNode } from "react";
import { AccordianContent, AccordianContainer } from "./Accordian.styled";
import { QuestionnaireProps } from "../../types";

interface AccordianProps {
  isExpanded: boolean;
  content: ReactNode | string;
  title: ReactNode | string;
  isAnswerGiven: boolean;
  toggleAccordianCollapseState: (id: number) => void;
  currentQuestionIndex: number;
  questions: QuestionnaireProps[];
  checkIfItemEnabled: (id: number) => void;
}

const Accordian: FC<AccordianProps> = ({
  isExpanded,
  content,
  title,
  isAnswerGiven,
  currentQuestionIndex,
  toggleAccordianCollapseState,
  checkIfItemEnabled,
  questions,
}) => {
  const record = questions[currentQuestionIndex] as QuestionnaireProps;

  /* checkIfFieldIsEnabled identifies if the next accordian
   is allowed to expand or not based on the previous filled information  */
  const checkIfFieldIsEnabled = () => {
    if (Array.isArray(record.enabled)) {
      return checkIfItemEnabled(currentQuestionIndex);
    }
    if (record.enabled) return true;
  };

  const toggleAccordion = (): void => {
    if (isAnswerGiven && checkIfFieldIsEnabled()) {
      toggleAccordianCollapseState(currentQuestionIndex);
    }
  };

  return (
    <AccordianContainer>
      <div className="accordion_section">
        <div
          className={`accordion ${isExpanded ? "active" : ""}`}
          onClick={toggleAccordion}
        >
          <div>{title}</div>
        </div>
        <AccordianContent isExpanded={isExpanded}>{content}</AccordianContent>
      </div>
    </AccordianContainer>
  );
};

export default Accordian;
