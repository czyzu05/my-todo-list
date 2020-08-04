import React, { useState } from 'react'
import './App.css'

import AddTask from './AddTask'
import TaskList from './TaskList'



const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: 'zagrać w wiedźmina 3',
      date: '2020-12-13',
      important: false,
      active: true,
      finishDate: null
    },
    {
      id: 1,
      text: 'nauczyć się Reacta oraz ReactNativa',
      date: '2020-09-22',
      important: true,
      active: true,
      finishDate: null
    },
    {
      id: 2,
      text: 'pomalować dom na niebiesko',
      date: '2020-10-03',
      important: false,
      active: true,
      finishDate: null
    },
    {
      id: 3,
      text: 'schudnąć 30 kg',
      date: '2020-11-09',
      important: false,
      active: true,
      finishDate: null
    },
    {
      id: 4,
      text: 'wygrać w nba',
      date: '2020-10-30',
      important: true,
      active: true,
      finishDate: null
    },
  ])

  const deleteTask = (id) => {
    console.log('delete' + id)
  }

  const changeTaskStatus = (id) => {
    console.log('done' + id)
  }

  return (
    <div className="App">
      TODO APP
      <AddTask />
      <TaskList tasks={tasks} delete={deleteTask} change={changeTaskStatus} />
    </div>
  )
}

export default App
