import { FC } from "react";
import { ErrorField } from './TextField.styled';
import { QuestionnaireProps } from '../../../types';
import { useWatch } from "react-hook-form";
interface TextFieldProps {
  item: QuestionnaireProps;
}

const TextField: FC<TextFieldProps> = ({
  item,
  register,
  currentFieldValues
}) => {
  const { type, title, placeholder, error, initialValue, disabled, id } = item;

  return (
    <div className="form-group">
      {title && <label>{title}</label>}
      <input
        type={type}
        disabled={disabled}
        value={initialValue}
        className="form-control"
        placeholder={placeholder}
        {...register?.(id, { required: true })}
      />
      {error && <ErrorField>{error}</ErrorField>}
    </div>
  );
};

export default TextField;