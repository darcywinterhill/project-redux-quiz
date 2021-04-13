/* eslint-disable */
import React from 'react'
import { useSelector } from 'react-redux'
import './ProgressBar.css'

export const ProgressBar = () => {

  const questionNumber = useSelector(
    (state) => state.quiz.currentQuestionIndex + 1
  )

  const questionTotal = useSelector(
    (state) => state.quiz.questions.length
  )

    return(
        <div className="progress-bar">
          <p>Question nr. {questionNumber} of {questionTotal}</p>
        </div>
    )
}