import { remove, searchById } from '../repository/tasks'

export const deleteTask = (taskId: string): void => {
  if (searchById(taskId) === undefined) {
    throw new Error('Task not found.')
  }

  remove(taskId)
}
