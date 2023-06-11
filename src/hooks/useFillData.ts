import { useState, useEffect } from "react";
import { QuestionnaireProps } from "../types";
import { fetchContent } from "../lib/questionnaire";
import { validateResponse } from "../util/validateResponse";

const useFillData = () => {
  const [questions, setQuestions] = useState<QuestionnaireProps[]>([]);
  const [fetchQuestions, setFetchQuestions] = useState<boolean>(false);

  const initializeQuestionsData = (response: QuestionnaireProps[]) => {
    return response.map((item, index) => {
      const { options = [] } = item;
      return {
        ...item,
        initialValue: '',
        isExpanded: index === 0,
        isAnswerGiven: index === 0,
        disabled: false,
        ...(item.type === "CHECKBOX" && {
          options: options.map((option) => {
            return {
              ...option,
              isChecked: false,
            };
          }),
        }),
      };
    });
  };

  useEffect(() => {
    fetchContent().then((res) => {
      setFetchQuestions(false);
      setQuestions(initializeQuestionsData(res));
    });
  }, [fetchQuestions]);

  const onChange = (
    e: React.ChangeEvent<HTMLElement>,
    currentQuestionIndex: number,
    optionIndex?: number
  ) => {
    const {
      target: { value, checked },
    } = e;
    const updatedQuestions = [...questions];
    const currentQuestion = updatedQuestions[currentQuestionIndex];
    const { type, initialValue } = currentQuestion;
    if (type === "CHECKBOX") {
      currentQuestion.options[optionIndex].isChecked =
        !currentQuestion.options[optionIndex].isChecked;
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
        const currentValue = initialValue.split(",");
        const index = currentValue.findIndex((item: string) => item === value);
        currentValue.splice(index, 1);
        currentQuestion.initialValue = currentValue.join(",");
      }
    } else {
      currentQuestion.initialValue = value;
    }

    setQuestions(updatedQuestions);
  };

  const onSubmitQuestion = (currentQuestionIndex: number) => {
    const updatedQuestions = [...questions];
    const currentQuestion = updatedQuestions[currentQuestionIndex];
    const { isError, error } = validateResponse(currentQuestion);
    if (!isError) {
      const { initialValue, isExpanded } = currentQuestion;
      currentQuestion.value = initialValue;
      currentQuestion.isExpanded = !isExpanded;
      currentQuestion.disabled = true;
      if(currentQuestionIndex + 1 < questions.length){
        updatedQuestions[currentQuestionIndex + 1].isAnswerGiven = true;
      }
    } else {
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
    currentQuestion.disabled = !disabled;
    setQuestions(updatedQuestions);
  };

  const toggleAccordianCollapseState = (currentQuestionIndex: number): void => {
    const updatedQuestions = [...questions];
    const currentQuestion = updatedQuestions[currentQuestionIndex];
    const { isExpanded } = currentQuestion;
    currentQuestion.isExpanded = !isExpanded;
    setQuestions(updatedQuestions);
  };

  const reloadQuestions = (): void => {
    setFetchQuestions(true);
  }


  const checkIfItemEnabled = (currentQuestionIndex: number) => {
    const updatedQuestions = [...questions];
    const { enabled = []} = updatedQuestions[currentQuestionIndex];
    for(let i = 0; i < enabled.length; i++){
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
