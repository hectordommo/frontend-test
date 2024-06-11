import React from 'react'
import './App.css'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import AppContext from './context/AppContext'

const App: React.FC = () => {
  return (
    <div className='mx-auto max-w-2xl p-4 min-h-screen'>
      <AppContext>
        <Header />
        <TodoForm />
        <TodoList />
      </AppContext>
    </div>
  )
}

export default App
