/* eslint-disable */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { ProgressBar } from './ProgressBar'
import { Summary } from './Summary'
import './CurrentQuestion.css'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
  const onButtonClick = (index) => {
    dispatch(quiz.actions.submitAnswer(
      { questionId: question.id, answerIndex: index }
    ))
    dispatch(quiz.actions.goToNextQuestion())
  }

  return (
    <>
      {quizOver ?
        <Summary /> : (
        <div className="current-question-container">
          <h1>{question.questionText}</h1>
          <div className="questions-container">
            {question.options.map((option, index) => (
              <button
                key={index}
                className="question-button"
                onClick={() => onButtonClick(index)}
                type="button">
                {option}
              </button>))}
          </div>
        <ProgressBar />
      </div>
      )}
    </>
  )
}