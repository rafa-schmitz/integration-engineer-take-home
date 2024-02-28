import { Router } from 'express'
import { createTaskController, getTaskController, updateTaskController, deleteTaskController } from '../controllers/taskController'

const router = Router()

router.post('/', createTaskController)

router.get('/', getTaskController)

router.put('/:id', updateTaskController)

router.delete('/:id', deleteTaskController)

export default router
