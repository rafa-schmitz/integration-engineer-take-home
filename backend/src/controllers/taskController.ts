import { type Request, type Response } from 'express'
import { type ITask } from '../types/task'

import { createTask } from '../use-cases/createTask'
import { getAll } from '../use-cases/getTasks'
import { updateTask } from '../use-cases/updateTask'
import { deleteTask } from '../use-cases/deleteTask'

export const createTaskController = (req: Request, res: Response): Response<ITask> => {
  try {
    const { title, description, completed } = req.body

    const createdTask = createTask({ title, description, completed })

    return res.status(201).json(createdTask)
  } catch (e: any) {
    return res.status(400).json({ error: e.message })
  }
}

export const getTaskController = (req: Request, res: Response): Response<ITask> => {
  try {
    return res.status(200).json(getAll())
  } catch (e: any) {
    return res.status(400).json({ error: e.message })
  }
}

export const updateTaskController = (req: Request, res: Response): Response<ITask> => {
  try {
    const { id } = req.params
    const { title, description, completed } = req.body

    updateTask(id, { title, description, completed })

    return res.status(200).json({ message: 'Task updated successfully' })
  } catch (e: any) {
    return res.status(400).json({ error: e.message })
  }
}

export const deleteTaskController = (req: Request, res: Response): Response => {
  try {
    const { id } = req.params

    deleteTask(id)

    return res.status(200).json({ message: 'Task deleted successfully' })
  } catch (e: any) {
    return res.status(400).json({ error: e.message })
  }
}
