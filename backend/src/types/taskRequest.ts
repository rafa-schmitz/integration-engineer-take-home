export interface ITaskRequest {
  title: string
  description: string
  completed: boolean
}

export const composeTask = (task: ITaskRequest): ITaskRequest => ({
  title: (task.title !== '') ? task.title : '',
  description: (task.description !== '') ? task.description : '',
  completed: task.completed
})
