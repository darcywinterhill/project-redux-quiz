import { createSlice } from '@reduxjs/toolkit'

const questions = [
  { id: 1, questionText: "What hangs on Monica's purple door?", options: ['A key hook', 'A coat hook', 'A yellow picture frame', 'A cap'], correctAnswerIndex: 2 },
  { id: 2, questionText: "What is the name of Rachel's hairless cat?", options: ['Baldy', 'Mrs. Whiskerson', 'Sid', 'Felix'], correctAnswerIndex: 1 },
  { id: 3, questionText: "What is the name of Phoebe's alter-ego?", options: ['Phoebe Neeby', 'Monica Bing', 'Regina Falange', 'Elaine Benes'], correctAnswerIndex: 2 },
  { id: 4, questionText: "Who is Chandler and Joey's TV magazine addressed to?", options: ['Miss Chanandler Bong', 'Mrs Chanel Beng', 'Ms Chandelier Bang', 'Rachel Greep'], correctAnswerIndex: 0 },
  { id: 5, questionText: "What kind of uniform does Joey wear to Monica and Chandler's wedding?", options: ['Chef', 'Soldier', 'Fire fighter', 'A baseball player'], correctAnswerIndex: 1 }
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false
}

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {

    /**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer      - The answer string.
     *    isCorrect   - true/false if the answer was the one which the question says is correct.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId`
     * and `answerIndex` keys. See the readme for more details.
     */
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find((q) => q.id === questionId)

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuestionIndex += 1
      }
    },

    /**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     *
     * This action does not require a payload.
     */
    restart: () => {
      return initialState
    }

  }
})