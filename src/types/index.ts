export interface optionsProps {
  text: string;
  key: string;
  isChecked: boolean;
}

export interface ValidationProps {
  type: string;
  message: string;
}

export interface EnabledProps {
  [key: string]: string;
}

export interface QuestionnaireProps {
  id: string;
  title: string;
  description: string;
  type: string;
  options: optionsProps[];
  validations: ValidationProps[];
  value: string | any;
  initialValue: any;
  placeholder?: string;
  error?: string;
  label?: string;
  isExpanded: boolean;
  isAnswerGiven: boolean;
  disabled: boolean;
  isChecked: boolean;
  enabled: boolean | EnabledProps[];
}
