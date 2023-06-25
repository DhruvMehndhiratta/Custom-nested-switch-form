import { FC, useState } from "react";
import Radio from "./Radio";
import { QuestionnaireProps } from '../../../types';
import { RadioContainer } from './RadioGroup.styled';

interface OptionProps {
  key: string;
  text: string;
}

interface RadioGroupProps {
  item: QuestionnaireProps;
  options: OptionProps[];
}

const RadioGroup: FC<RadioGroupProps> = ({ item }) => {
  const { options = [] } = item;
  const [selectedOption, setSelectedOption] = useState(options.findIndex((resp) => resp.key === item.value));

  const handleChange = (e: React.ChangeEvent<HTMLElement>): void => {
    // @ts-ignore
    const { target: { value } } = e;
    const index = options.findIndex((item) => item.key === value);
    if (index !== -1) {
      setSelectedOption(index);
    }
  };

  return (
    <RadioContainer>
      {options.map((item, index) => (
        <Radio
          // disabled={disabled}
          key={item.key}
          item={item}
          handleChange={handleChange}
          isActive={index === selectedOption}
        />
      ))}
    </RadioContainer>
  );
};

export default RadioGroup;