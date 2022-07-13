import React from "react";

function QuestionItem({ question, onDelete, onEdit }) {
  const { id, prompt, answers, correctIndex } = question;

  function handleDelete() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onDelete(id));
  }

  function handleEdit(e) {
    let correctIndex = e.target.value;
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...question, correctIndex }),
    })
      .then((res) => res.json())
      .then((updatedQuestion) => {
        console.log(updatedQuestion);

        onEdit(updatedQuestion);
      });
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer: {correctIndex}
        <select defaultValue={correctIndex} onChange={handleEdit}>
          {options}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
