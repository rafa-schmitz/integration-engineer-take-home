import { type ITask } from '../types/task'
import { searchAll } from '../repository/tasks'
export const getAll = (): Record<number, ITask> => {
  return searchAll()
}
