import { FC } from "react";
import { CheckboxContainer } from "./Checkbox.styled";

interface CheckboxEntity {
  key: string;
  text: string;
  isChecked: boolean;
}

interface CheckboxProps {
  item: CheckboxEntity;
  handleChange: (
    e: React.ChangeEvent<HTMLElement>,
    currentQuestion: number,
    itemIndex: number
  ) => void;
  currentQuestion: number;
  itemIndex: number;
  disabled: boolean;
}
const Checkbox: FC<CheckboxProps> = ({
  item,
  handleChange,
  currentQuestion,
  itemIndex,
  disabled
}) => {
  return (
    <CheckboxContainer>
      <input
        type="checkbox"
        id={item.key}
        value={item.key}
        name={item.text}
        disabled={disabled}
        checked={item.isChecked}
        onChange={(e) => handleChange(e, currentQuestion, itemIndex)}
      />
      <label htmlFor={item.key}>{item.text}</label>
    </CheckboxContainer>
  );
};

export default Checkbox;
