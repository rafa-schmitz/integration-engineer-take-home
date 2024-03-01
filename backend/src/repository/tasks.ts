import { type ITask } from '../types/task'
import { type ITaskRequest } from '../types/taskRequest'

import crypto from 'crypto'

export const tasks: Record<string, ITask> = {
  0: {
    id: crypto.randomUUID(),
    title: 'take the cat to the vet',
    description: 'march 4th @ 3pm',
    completed: false,
    createdAt: new Date(),
    updatedAt: null
  }
}

// Maintain a separate mapping of task IDs to tasks
const taskMap: Record<string, ITask> = {}

Object.values(tasks).forEach(task => {
  taskMap[task.id] = task
})

export const save = (task: ITaskRequest): ITask => {
  const newTask: ITask = {
    id: crypto.randomUUID(),
    title: task.title,
    description: task.description,
    completed: task.completed,
    createdAt: new Date(),
    updatedAt: null
  }

  tasks[newTask.id] = newTask
  taskMap[newTask.id] = newTask

  return newTask
}

export const searchAll = (): ITask[] => {
  return Object.values(taskMap).sort((a: ITask, b: ITask) => a.createdAt.getTime() - b.createdAt.getTime())
}

export const update = (taskId: string, updatedTask: ITaskRequest): ITask | undefined => {
  const existingTask = taskMap[taskId]

  if (existingTask === undefined) return undefined // Task with the specified ID not found

  // Modify existing task properties directly
  existingTask.title = updatedTask.title ?? existingTask.title
  existingTask.description = updatedTask.description ?? existingTask.description
  existingTask.completed = updatedTask.completed ?? existingTask.completed
  existingTask.updatedAt = new Date()

  return existingTask
}

export const remove = (taskId: string): void => {
  if (taskMap[taskId] !== undefined) {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete tasks[taskMap[taskId].id]
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete taskMap[taskId]
  }
}

export const searchById = (taskId: string): ITask | undefined => {
  return taskMap[taskId]
}
