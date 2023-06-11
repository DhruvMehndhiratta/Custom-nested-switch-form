import { FC } from "react";
import { CommonEventsHandlerProps } from '../Questions'
import { QuestionnaireProps } from "../../types";
import CheckboxGroup from "../Input/CheckboxGroup";
import RadioGroup from "../Input/RadioGroup";
import TextField from "../Input/TextField";
import Select from "../Input/Select";
import {
  ActionButtonContainer,
  SubmitButton,
  CancelButton,
} from "../Questions/Questions.styled";

interface FetchInputTypeProps extends CommonEventsHandlerProps {
  item: QuestionnaireProps;
  currentQuestion: number;
}

const Input: FC<FetchInputTypeProps> = ({
  item,
  onChange,
  currentQuestion,
  onCancelQuestion,
  onEditQuestion,
  onSubmitQuestion,
}) => {
  const { type } = item;
  const Map = {
    CHECKBOX: CheckboxGroup,
    RADIO: RadioGroup,
    NUMBER: TextField,
    DATE: TextField,
    TEXT: TextField,
    SELECT: Select,
  };
  // @ts-ignore
  let Component = Map[type];
  const handleUpdateQuestion = (): void => {
    if (item.disabled) {
      onEditQuestion(currentQuestion);
    } else {
      onSubmitQuestion(currentQuestion);
    }
  };
  return (
    <>
      <Component
        currentQuestion={currentQuestion}
        onChange={onChange}
        item={item}
      />
      <ActionButtonContainer marginTop={20}>
        <SubmitButton onClick={handleUpdateQuestion}>
          {`${item.disabled ? "Edit" : "Submit"}`}
        </SubmitButton>
        <CancelButton onClick={() => onCancelQuestion(currentQuestion)}>
          Cancel
        </CancelButton>
      </ActionButtonContainer>
    </>
  );
};

export default Input