import express, { Router } from 'express'
import cors from 'cors'
import tasks from '../src/routes/tasks'

const PORT = process.env.PORT ?? 5000

const app = express()
const router = Router()

router.use('/v1/tasks', tasks)

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) })
