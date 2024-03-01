import { type ITask } from '../types/task'
import { type ITaskRequest } from '../types/taskRequest'

import { update } from '../repository/tasks'

export const updateTask = (id: string, taskRequest: ITaskRequest): ITask | undefined => {
  const { title, description } = taskRequest

  if (title === undefined || title === '') {
    throw new Error('A title for the task is required.')
  }

  if (description === undefined || description === '') {
    throw new Error('A description for the task is required.')
  }

  return update(id, taskRequest)
}
