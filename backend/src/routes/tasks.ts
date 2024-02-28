import { Router } from 'express'
import { createTaskController, getTaskController } from '../controllers/taskController'

const router = Router()

router.post('/', createTaskController)

router.get('/', getTaskController)

export default router
