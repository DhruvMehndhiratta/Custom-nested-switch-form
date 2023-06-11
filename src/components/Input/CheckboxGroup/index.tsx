import { FC } from "react";
import Checkbox from "./Checkbox";
import { QuestionnaireProps } from "../../../types";

interface CheckboxGroupProps {
  onChange: (
    e: React.ChangeEvent<HTMLElement>,
    currentQuestion: number
  ) => void;
  item: QuestionnaireProps;
  currentQuestion: number;
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  onChange,
  item,
  currentQuestion,
}) => {
  const { options = [] } = item;

  return (
    <div>
      {options.map((option, index) => (
        <Checkbox
          key={option.key}
          item={option}
          handleChange={onChange}
          currentQuestion={currentQuestion}
          itemIndex={index}
          disabled={item.disabled}
        />
      ))}
    </div>
  );
};

export default CheckboxGroup;
