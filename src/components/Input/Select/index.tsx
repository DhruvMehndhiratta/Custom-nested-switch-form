import { FC } from "react";
import { QuestionnaireProps } from "../../../types";

interface OptionProps {
  key: string;
  text: string;
}

interface SelectProps {
  onChange: (
    e: React.ChangeEvent<HTMLElement>,
    currentQuestion: number
  ) => void;
  item: QuestionnaireProps;
  currentQuestion: number;
}

const Select: FC<SelectProps> = ({ onChange, item, currentQuestion }) => {
  const { options = [], initialValue } = item;
  return (
    <div>
      <select
        value={initialValue}
        onChange={(e) => onChange(e, currentQuestion)}
        disabled={item.disabled}
      >
        <option value="">Select</option>
        {options.map((item) => (
          <option value={item.key} key={item.key}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
