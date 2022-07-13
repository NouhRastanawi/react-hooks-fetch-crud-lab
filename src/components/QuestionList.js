import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {
  function handleDelete(id) {
    const newQuestions = questions.filter((question) => question.id !== id);
    setQuestions(newQuestions);
  }

  function handleEdit(updatedQuestion) {
    const newQuestions = questions.map((question) => {
      if (question.id === updatedQuestion.id) {
        console.log(updatedQuestion);
        return {
          ...updatedQuestion,
        };
      }
      return question;
    });
    console.log(newQuestions);

    setQuestions(newQuestions);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            onEdit={handleEdit}
            onDelete={handleDelete}
            question={question}
            key={question.id}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
