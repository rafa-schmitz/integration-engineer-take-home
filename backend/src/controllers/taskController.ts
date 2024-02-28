import { type Request, type Response } from 'express'
import { type ITask } from '../types/task'

import { composeTask } from '../types/taskRequest'

import { createTask } from '../use-cases/createTask'
import { getAll } from '../use-cases/getTasks'

export const createTaskController = (req: Request, res: Response): Response<ITask> => {
  try {
    const { title, description, completed } = req.body

    return res.status(201).json(createTask(composeTask({ title, description, completed })))
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
