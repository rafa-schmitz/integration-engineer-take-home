import { Router } from 'express'
import { createTaskController } from '../controllers/taskController'

const router = Router()

router.post('/', createTaskController)

export default router
