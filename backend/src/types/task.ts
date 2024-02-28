export interface ITask {
  id: string
  title: string
  description: string
  completed: boolean
  createdAt: Date
  updatedAt: Date | null
}
