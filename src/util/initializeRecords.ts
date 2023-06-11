import { QuestionnaireProps } from '../types';

// initializeQuestionsData helps to initialize the state of the application
export const initializeQuestionsData = (response: QuestionnaireProps[]) => {
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
