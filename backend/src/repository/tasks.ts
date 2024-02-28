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
