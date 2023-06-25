import { FC } from "react";
import { QuestionnaireProps } from '../../types';

interface HeadingProps {
  item: Partial<QuestionnaireProps>;
}



const SubHeading: FC<HeadingProps> = ({ item }) => {
  const { title, id } = item;
  return <h3 id={id}>{title}</h3>;
};

export default SubHeading;
