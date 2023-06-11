import styled from "styled-components";

export const Container = styled("div")`
  margin: 24px 36px;
`;

export const QuestionStatus = styled("div")<{ isFilled: boolean }>`
  border-radius: 50%;
  height: 24px;
  width: 24px;
  background: ${(props) => (props.isFilled ? "green" : "#2282C1")};
`;

export const TitleContainer = styled("div")`
  cursor: pointer;
  padding: 20px;
  display: flex;
`;

export const QuestionTitle = styled("span")<{ isExpanded: boolean }>`
  color: ${(props) => (props.isExpanded ? "#143C7F" : "#4a4a4a")};
  font-size: 18px;
  flex: 9;
`;

export const AnswerSection = styled("span")`
  flex: 9;
  color: #767676;
`;

export const ActionButtonContainer = styled("div")<{ marginTop: number }>`
  display: flex;
  margin-top: ${(props) => `${(props.marginTop)}px`};
`;

export const SubmitButton = styled("button")`
  background-color: #2282c1;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: none;
  border-color: transparent;
  cursor: pointer;
`;

export const CancelButton = styled("button")`
  color: #2282c1;
  background-color: white;
  padding: 12px 16px;
  border: none;
  font-size: 15px;
  cursor: pointer;
`;

export const InputContainer = styled('div')`
  margin-top: 20px;
`;
