import { Router } from 'express'
import { createTaskController, getTaskController, updateTaskController } from '../controllers/taskController'

const router = Router()

router.post('/', createTaskController)

router.get('/', getTaskController)

router.put('/:id', updateTaskController)

export default router
