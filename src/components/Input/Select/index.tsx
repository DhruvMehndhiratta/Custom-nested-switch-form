import { FC } from "react";
import { QuestionnaireProps } from "../../../types";

interface OptionProps {
  key: string;
  text: string;
}

interface SelectProps {
  item: QuestionnaireProps;
}

const Select: FC<SelectProps> = ({ item, register }) => {
  const { options = [], initialValue, title, id } = item;
  return (
    <div className="form-group">
      {title && <label>{title}</label>}
      <select
        className="w-100"
        value={initialValue}
        {...register?.(id,{ required: true})}
      >
        <option value="" >Select</option>
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