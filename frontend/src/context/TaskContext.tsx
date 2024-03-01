import React, { createContext, useEffect, useContext, useState, ReactNode } from 'react'

import { type ITask } from '../types/task.ts'
import { getAllTasks } from '../api'

interface ITaskContext {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

interface IContextProvider {
  children: ReactNode
}

export const TasksContext = createContext<ITaskContext>({
  tasks: [],
  setTasks: () => null,
})

export const TasksProvider = ({children}: IContextProvider) => {
  const [tasks, setTasks] = useState<ITask[]>([])

  useEffect(() => {
    getAllTasks()
      .then(response => {
        setTasks(response);
      })

    return () => {}
  }, [])

  return (
    <TasksContext.Provider value={{tasks, setTasks}}>
      {children}
    </TasksContext.Provider>
  )
}

export const useTasks = () => useContext(TasksContext)