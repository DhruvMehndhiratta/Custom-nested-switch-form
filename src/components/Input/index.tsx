import { FC } from "react";
import { QuestionnaireProps } from "../../types";
import RadioGroup from "../Input/RadioGroup";
import TextField from "../Input/TextField";
import Select from "../Input/Select";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import TabGroup from "../TabGroup";

interface FetchInputTypeProps {
  item: QuestionnaireProps;
}

const Input: FC<FetchInputTypeProps> = ({
  item,
  register,
  currentFieldValues
}) => {
  const { type } = item;
  const Map = {
    RADIO: RadioGroup,
    NUMBER: TextField,
    DATE: TextField,
    TEXTFIELD: TextField,
    SELECT: Select,
    HEADING: Heading,
    SUBHEADING: SubHeading,
    TAB_GROUP: TabGroup
  };
  // @ts-ignore
  let Component = Map[type];

  return (
    <>
      <Component
        register={register}
        key={item.id}
        item={item}
        currentFieldValues={currentFieldValues}
      />
    </>
  );
};

export default Input