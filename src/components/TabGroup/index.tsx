import { FC, useState, useEffect } from "react";
import Input from "../Input";
import { QuestionnaireProps } from "../../types";

interface TabGroupProps {
  item: Partial<QuestionnaireProps>;
}

const TabGroup: FC<TabGroupProps> = ({
  item,
  currentFieldValues,
  register,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const { content = [] } = item;
  const activeFields = content[activeTab].fields;

  useEffect(() => {
    const index = content.findIndex((resp) =>
      resp.enabled.every(
        (output) => {
          if(typeof output.value === "string"){
            return currentFieldValues[output.id] === output.value
          }
          else {
            return output.value.some((val) => val === currentFieldValues[output.id])
          }
        }
      )
    );
    if (index !== -1) {
      setActiveTab(index);
    }
  }, [currentFieldValues]);
  return (
    <>
      <ul className="nav nav-underline">
        {content.map((element, index) => {
          return (
            <li className="nav-item" onClick={() => setActiveTab(index)} key={element.id}>
              <a
                className={`nav-link ${index === activeTab ? "active" : ""}`}
                aria-current="page"
                href="#"
              >
                {element.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="mt-3">
        {activeFields.map((response) => (
          <Input item={response} {...register?.(response.id)} key={response.id} />
        ))}
      </div>
    </>
  );
};

export default TabGroup;
