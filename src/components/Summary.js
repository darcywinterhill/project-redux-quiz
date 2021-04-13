/* eslint-disable */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz} from '../reducers/quiz'
import './Summary.css'

export const Summary = () => {

    const dispatch = useDispatch()
    const answers = useSelector(
      (state) => state.quiz.answers
    )
    const correctAnswers = answers.filter(answer => answer.isCorrect).length
    const numOfAnswers = answers.length

    return (
        <div className="summary-container">
          <div className="summary">
            {correctAnswers < 3 && (
              <>
              <h2>Could you BE any worse at this?</h2>
              <iframe src="https://giphy.com/embed/2ROSG9dnHbqyA" width="auto" height="300" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
              </>
            )}
            {correctAnswers >= 3 && (
              <>
              <h2>Oh... My... God!</h2>
              <iframe src="https://giphy.com/embed/ZdUnQS4AXEl1AERdil" width="auto" height="300" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
              </>
            )}
            <p>You got {correctAnswers} right answers out of {numOfAnswers}</p>
          </div>
          <div className="button-container">
            <button
              className="restart-button"
              onClick={() => dispatch(quiz.actions.restart())}
            >
              Quiz again!
            </button>
          </div>
        </div>
    )
}