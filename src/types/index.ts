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

export interface TabContentProps {
  title: string;
  fields: QuestionnaireProps[];
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
  enabled: boolean | EnabledProps[];
  content: TabContentProps;
}
