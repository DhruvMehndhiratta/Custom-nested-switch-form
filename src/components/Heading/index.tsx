import { FC } from "react";
import { QuestionnaireProps } from '../../types';

interface HeadingProps {
  item: Partial<QuestionnaireProps>;
}

const Heading: FC<HeadingProps> = ({ item }) => {
  const { title, id }= item;
  return <h1 id={id}>{title}</h1>;
};

export default Heading;
