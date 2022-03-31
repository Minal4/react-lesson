import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export const Quiz = () => {
  const questions = [
    {
      questionText: 'What is the capital of France',
      answerOptions: [
        {
          answerText: 'New York',
          isCorrect: false,
        },
        {
          answerText: 'Paris',
          isCorrect: true,
        },
        {
          answerText: 'Kathmandu',
          isCorrect: false,
        },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla',
      answerOptions: [
        {
          answerText: 'Jeff Bezos',
          isCorrect: false,
        },
        {
          answerText: 'elon musk',
          isCorrect: true,
        },
        {
          answerText: 'steve jobs',
          isCorrect: false,
        },
      ],
    },
    {
      questionText: 'IPHONE created BY',
      answerOptions: [
        {
          answerText: 'Apple',
          isCorrect: true,
        },
        {
          answerText: 'Intel',
          isCorrect: false,
        },
        {
          answerText: 'Amazon',
          isCorrect: false,
        },
      ],
    },
  ];
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [result, setResult] = useState(0);

  const questionHandler = (isCorrect) => {
    if (isCorrect === true) {
      setResult(result + 1);
    }
    const newQuestion = questionIndex + 1;
    if (newQuestion < questions.length) {
      setQuestionIndex(newQuestion);
    } else {
      setShowScore(true);
    }
  };

  const Reset = () => {
    setShowScore(false);
  };

  return (
    <div>
      <h1>Quiz</h1>
      {showScore ? (
        <p>
          Your result is {result} out of {questions.length}
          <Button onClick={Reset}>Again</Button>
        </p>
      ) : (
        <div>
          <h2>{`Question ${questionIndex + 1}/${questions.length}`}</h2>
          <span>{questions[questionIndex].questionText}</span>
          <br></br>
          {questions[questionIndex].answerOptions.map((item, index) => {
            console.log(item, 'ANSWER');
            return (
              <button
                key={index}
                onClick={() => questionHandler(item.isCorrect)}
                className="btn btn-dark mx-2 my-2"
              >
                {item.answerText}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
