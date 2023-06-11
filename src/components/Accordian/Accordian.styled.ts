import styled from "styled-components";

export const AccordianContainer = styled("div")`
  border-style: solid;
  border-color: #d1d1d1;
  border-width: 0 0 1px 0px;
  &first-child {
    border-top: 1px solid #d1d1d1;
  }
`;

export const AccordianContent = styled("div")<{ isExpanded: boolean }>`
  padding: 16px 24px;
  margin: 0;
  height: ${(props) => (props.isExpanded ? "100%" : "0")};
  display: ${(props) => (props.isExpanded ? "block" : "none")};
`;
