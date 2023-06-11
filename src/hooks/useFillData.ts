import { useState, useEffect } from "react";
import { QuestionnaireProps } from "../types";
import { fetchContent } from "../lib/questionnaire";
import { validateResponse } from "../util/validateResponse";
import { initializeQuestionsData } from '../util/initializeRecords';

const useFillData = () => {
  const [questions, setQuestions] = useState<QuestionnaireProps[]>([]);
  const [fetchQuestions, setFetchQuestions] = useState<boolean>(false);


  useEffect(() => {
    fetchContent().then((res) => {
      setFetchQuestions(false);
      setQuestions(initializeQuestionsData(res));
    });
  }, [fetchQuestions]);

  const onChange = (
    e: React.ChangeEvent<HTMLElement>,
    currentQuestionIndex: number, // used for determining which item in questions set is updated
    optionIndex?: number // used for determining which option in checkbox is clicked
  ) => {
    // @ts-ignore
    const { target: { value, checked }} = e;
    const updatedQuestions = [...questions];
    const currentQuestion = updatedQuestions[currentQuestionIndex];
    const { type, initialValue } = currentQuestion;

    // append selecting values in case of checkbox by comma separated as checkbox can take multiple values
    if (type === "CHECKBOX") {
       // @ts-ignore
      currentQuestion.options[optionIndex].isChecked = !currentQuestion.options[optionIndex].isChecked;
      if (checked) {
        if (!initialValue) {
          currentQuestion.initialValue = value;
        } else {
          currentQuestion.initialValue = currentQuestion.initialValue
            .split(",")
            .concat(value)
            .join(",");
        }
        ``;
      } else {
        // if the value is unchecked from checkbox removing that value from selected variable
        const currentValue = initialValue.split(",");
        const index = currentValue.findIndex((item: string) => item === value);
        currentValue.splice(index, 1);
        currentQuestion.initialValue = currentValue.join(",");
      }
    } else {
      // default case apart from checkbox
      currentQuestion.initialValue = value;
    }

    setQuestions(updatedQuestions);
  };

  const onSubmitQuestion = (currentQuestionIndex: number) => {
    const updatedQuestions = [...questions];
    const currentQuestion = updatedQuestions[currentQuestionIndex];
    // validateResponse util determines whether the given input has any validation error or not
    const { isError, error } = validateResponse(currentQuestion);
    if (!isError) {
      const { initialValue, isExpanded } = currentQuestion;
      currentQuestion.value = initialValue; // using initialValue as temporary value holding variable
      currentQuestion.isExpanded = !isExpanded; // close accordian after value is succesfully submitted
      currentQuestion.disabled = true; // disabling all the options in a given input so that user can enable it by using Edit
      if(currentQuestionIndex + 1 < questions.length){
        updatedQuestions[currentQuestionIndex + 1].isAnswerGiven = true;
      }
    } else {
      // setting up validation message in case of error exist
      currentQuestion.error = error;
    }

    setQuestions(updatedQuestions);
  };

  const onCancelQuestion = (currentQuestionIndex: number): void => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].value = "";
    updatedQuestions[currentQuestionIndex].initialValue = "";
    setQuestions(updatedQuestions);
  };

  const onEditQuestion = (currentQuestionIndex: number): void => {
    const updatedQuestions = [...questions];
    const currentQuestion = updatedQuestions[currentQuestionIndex];
    const { disabled } = currentQuestion;
    // toggling disabled flag based on that given input options will be enabled
    currentQuestion.disabled = !disabled;
    setQuestions(updatedQuestions);
  };

  const toggleAccordianCollapseState = (currentQuestionIndex: number): void => {
    const updatedQuestions = [...questions];
    const currentQuestion = updatedQuestions[currentQuestionIndex];
    const { isExpanded } = currentQuestion;
    // toggling accordian state for a given question
    currentQuestion.isExpanded = !isExpanded;
    setQuestions(updatedQuestions);
  };

  const reloadQuestions = (): void => {
    // in case of reset event we need to re initialize our current state
    setFetchQuestions(true);
  }

  /* checkIfItemEnabled is used for the handling enabled flag if the
  given question has any dependency with other filled answers
  */
  const checkIfItemEnabled = (currentQuestionIndex: number) => {
    const updatedQuestions = [...questions];
    const { enabled = []} = updatedQuestions[currentQuestionIndex];
    // @ts-ignore
    for(let i = 0; i < enabled.length; i++){
       // @ts-ignore
      const currentItem = enabled[i];
      const keyItem = Object.keys(currentItem)[0] as string;
      const index = updatedQuestions.findIndex((item) => item.id === keyItem);
      if(updatedQuestions[index].value === currentItem[keyItem]){
        return true;
      }
    }
    updatedQuestions[currentQuestionIndex].initialValue = 'N/A';
    updatedQuestions[currentQuestionIndex].value = 'N/A';
    if(currentQuestionIndex + 1 < questions.length){
      updatedQuestions[currentQuestionIndex + 1].isAnswerGiven = true;
    }
    setQuestions(updatedQuestions);
    return false;
  }

  return {
    questions,
    onChange,
    onCancelQuestion,
    onSubmitQuestion,
    onEditQuestion,
    toggleAccordianCollapseState,
    reloadQuestions,
    checkIfItemEnabled
  };
};

export default useFillData;
