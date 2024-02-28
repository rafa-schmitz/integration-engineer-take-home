import { type ITask } from '../types/task'
import { type ITaskRequest } from '../types/taskRequest'
import { save } from '../repository/tasks'

export const createTask = (taskRequest: ITaskRequest): ITask => {
  if (taskRequest.title === '') {
    throw new Error('A title for the task is required.')
  }

  if (taskRequest.description === '') {
    throw new Error('A description for the task is required.')
  }

  return save(taskRequest)
}
