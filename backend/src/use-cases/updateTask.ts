import { type ITask } from '../types/task'
import { type ITaskRequest } from '../types/taskRequest'
import { update } from '../repository/tasks'

export const updateTask = (id: string, taskRequest: ITaskRequest): ITask | undefined => (update(id, taskRequest))
