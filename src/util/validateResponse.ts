import { QuestionnaireProps } from "../types";

const lengthValidation = {
  MIN_LENGTH_TEXT: 3,
  MAX_LENGTH_TEXT: 25,
  MIN_LENGTH_NUMBER: 7,
  MAX_LENGTH_NUMBER: 12,
};

export const validateResponse = (currentQuestion: QuestionnaireProps) => {
  let isError = false;
  let error = "";

  const handleCheckValidation = () => {
    const { validations = [], type, initialValue } = currentQuestion;
    if (validations.length && (type === "NUMBER" || type === "TEXT")) {
      for (let i = 0; i < validations.length; i++) {
        const validation = validations[i];
        if (
          validation.type === "min" &&
          initialValue?.length < lengthValidation[`MIN_LENGTH_${type}`]
        ) {
          isError = true;
          error = validation.message;
          break;
        }
        if (
          validation.type === "max" &&
          initialValue?.length > lengthValidation[`MAX_LENGTH_${type}`]
        ) {
          isError = true;
          error = validation.message;
          break;
        }
      }
    }
  };

  handleCheckValidation();

  return {
    isError,
    error,
  };
};

export const checkFieldStatus  = (questions: QuestionnaireProps[]): boolean => {
  // console.log(questions, "questions>>>");

}