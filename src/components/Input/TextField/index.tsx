import { FC } from "react";
import { ErrorField } from './TextField.styled';
import { QuestionnaireProps } from '../../../types';

interface TextFieldProps {
  item: QuestionnaireProps;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, currentQuestion: number) => void;
  currentQuestion: number;
}

const TextField: FC<TextFieldProps> = ({
  onChange,
  currentQuestion,
  item
}) => {
  const {  type, label, placeholder, error, initialValue, disabled } = item;
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input
        type={type}
        disabled={disabled}
        value={initialValue}
        className="form-control"
        placeholder={placeholder}
        onChange={(e) => onChange(e, currentQuestion)}
      />
      {error && <ErrorField>{error}</ErrorField>}
    </div>
  );
};

export default TextField;
