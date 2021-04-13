import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import './index.css'

import { CurrentQuestion } from 'components/CurrentQuestion'
import { Header } from 'components/Header'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <div className="background">
          <Header />
          <CurrentQuestion />
        </div>
      </main>
    </Provider>
  )
}