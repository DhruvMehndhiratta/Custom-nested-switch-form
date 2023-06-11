import { FC } from "react";
import { CheckboxContainer } from "../CheckboxGroup/Checkbox.styled";

interface CheckboxEntity {
  key: string;
  text: string;
}

interface CheckboxProps {
  item: CheckboxEntity;
  handleChange: (e: React.ChangeEvent<HTMLElement>) => void;
  isActive: boolean;
  disabled: boolean;
}
const Checkbox: FC<CheckboxProps> = ({ item, handleChange, isActive, disabled }) => {
  return (
    <CheckboxContainer>
      <input
        type="radio"
        disabled={disabled}
        id={item.key}
        value={item.key}
        name={item.text}
        checked={isActive}
        onChange={handleChange}
      />
      <label htmlFor={item.key}>{item.text}</label>
    </CheckboxContainer>
  );
};

export default Checkbox;
