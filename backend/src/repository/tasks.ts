import { type ITask } from '../types/task'
import { type ITaskRequest } from '../types/taskRequest'

import crypto from 'crypto'

export let tasks: Record<number, ITask> = {
  0: {
    id: crypto.randomUUID(),
    title: 'Test task',
    description: 'Test description',
    completed: false,
    createdAt: new Date(),
    updatedAt: null
  }
}

export const save = (task: ITaskRequest): ITask => {
  const objectKey: number = Object.keys(tasks).length

  // Add the new task to the tasks record
  tasks[objectKey] = {
    id: crypto.randomUUID(),
    title: task.title,
    description: task.description,
    completed: task.completed,
    createdAt: new Date(),
    updatedAt: null
  }

  return tasks[objectKey]
}

export const searchAll = (): Record<number, ITask> => {
  return tasks
}

export const update = (taskId: string, updatedTask: ITaskRequest): ITask => {
  const updatedTasks: Record<number, ITask> = {}

  for (const key in tasks) {
    if (Object.prototype.hasOwnProperty.call(tasks, key)) {
      const task = tasks[key]
      if (task.id === taskId) {
        updatedTasks[parseInt(key, 10)] = {
          id: taskId,
          title: updatedTask.title,
          description: updatedTask.description,
          completed: updatedTask.completed,
          createdAt: task.createdAt,
          updatedAt: new Date()
        }
      } else {
        updatedTasks[parseInt(key, 10)] = task
      }
    }
  }

  tasks = updatedTasks // Update tasks with the new object
  return tasks[parseInt(taskId, 10)]
}

export const remove = (taskId: string): void => {
  // Create a new object without the task with the given ID
  const updatedTasks: Record<number, ITask> = {}
  for (const key in tasks) {
    if (Object.prototype.hasOwnProperty.call(tasks, key) && tasks[key].id !== taskId) {
      updatedTasks[parseInt(key, 10)] = tasks[key]
    }
  }
  tasks = updatedTasks // Update tasks with the new object
}

export const searchById = (taskId: string): ITask | undefined => {
  // Find the task with the given ID
  for (const key in tasks) {
    if (Object.prototype.hasOwnProperty.call(tasks, key)) {
      const task = tasks[key]
      if (task.id === taskId) {
        return task
      }
    }
  }
  // Return undefined if the task with the given ID is not found
  return undefined
}
