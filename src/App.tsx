import Questions from "./components/Questions";
import useFillData from "./hooks/useFillData";

function App() {
  const {
    questions,
    onChange,
    onCancelQuestion,
    onSubmitQuestion,
    onEditQuestion,
    toggleAccordianCollapseState,
    reloadQuestions,
    checkIfItemEnabled
  } = useFillData();

  return (
    <Questions
      questions={questions}
      onChange={onChange}
      onCancelQuestion={onCancelQuestion}
      onEditQuestion={onEditQuestion}
      toggleAccordianCollapseState={toggleAccordianCollapseState}
      onSubmitQuestion={onSubmitQuestion}
      reloadQuestions={reloadQuestions}
      checkIfItemEnabled={checkIfItemEnabled}
    />
  );
}

export default App;
