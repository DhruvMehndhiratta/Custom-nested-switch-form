import { FC, useState } from "react";
import Radio from "./Radio";
import { QuestionnaireProps } from '../../../types';

interface OptionProps {
  key: string;
  text: string;
}

interface RadioGroupProps {
  item: QuestionnaireProps;
  options: OptionProps[];
  onChange: (e: React.ChangeEvent<HTMLElement>, currentQuestion: number) => void;
  currentQuestion: number;
}

const RadioGroup: FC<RadioGroupProps> = ({ onChange, currentQuestion, item }) => {
  const { options = [], disabled } = item;
  const [selectedOption, setSelectedOption] = useState(-1);

  const handleChange = (e: React.ChangeEvent<HTMLElement>): void => {
    const {
      target: { value },
    } = e;
    const index = options.findIndex((item) => item.key === value);
    if (index !== -1) {
      setSelectedOption(index);
    }
    onChange(e, currentQuestion);
  };

  return (
    <div>
      {options.map((item, index) => (
        <Radio
          disabled={disabled}
          key={item.key}
          item={item}
          handleChange={handleChange}
          isActive={index === selectedOption}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
