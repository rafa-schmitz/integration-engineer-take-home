import { useState } from 'react'
import { type ITask } from '../types/task.ts'
import { MdDelete, MdDone, MdOutlineEdit, MdRemoveDone } from 'react-icons/md'
import { EditTaskModal } from './EditTaskModal.tsx'
import dayjs from 'dayjs'
import 'dayjs/locale/en.js'
import { deleteTask, getAllTasks, updateTask } from '../api'
import { useTasks } from '../context/TaskContext.tsx'

export const ToDoItemCard = ({ id, title, description, completed, createdAt, updatedAt }: ITask) => {
  const { setTasks } = useTasks()
  const [isEditingTask, setIsEditingTask] = useState<boolean>(false)
  const taskCompletedStyles =  completed ? `opacity-50 line-through` : ''

  const taskCreationDate = `created at ${dayjs(createdAt).format("MM/DD/YY")}`
  let taskUpdateDate = 'not yet updated'

  if (updatedAt) {
    taskUpdateDate = `last update at ${dayjs(updatedAt).format("MM/DD/YY")}`
  }

  return (
    <>
      <div className={`flex flex-col md:flex-row justify-between items-center gap-2 mb-10 border-slate-50 bg-gradient-to-r from-purple-500 to-blue-500 rounded user-select-none transition-transform duration-150 transform hover:translate-y-0.5 hover:translate-x-0.5 card ${taskCompletedStyles}`}>
        {/* task details col*/}
        <div className="flex flex-col p-4">
          <div className="flex flex-col gap-5">
            <p className="align-center bold mb-2 flex flex-wrap text-left text-2xl text-slate-200">
              {title}
            </p>

            <p className="align-center italic flex flex-wrap text-left text-1xl text-slate-200">
              {description}
            </p>

            <div className="flex flex-col">
              <span className="align-center italic flex flex-wrap text-left text-xs text-slate-200">
              {taskCreationDate}
            </span>
              <span className="align-center italic flex flex-wrap text-left text-xs text-slate-200">
              {taskUpdateDate}
            </span>
            </div>
          </div>
        </div>

        {/* task actions */}
        <div className="flex justify-between items-center gap-3 m-2 md:mt-0 md:mb-0">
          <button onClick={e => {
            e.stopPropagation();
            setIsEditingTask(true);
          }}>
            <MdOutlineEdit color="#FFFFFF" size={25} />
          </button>

          <button onClick={e => {
            e.stopPropagation();

            updateTask({ id, title: title, description: description, completed: !completed })
              .then(() => getAllTasks())
              .then(tasks => setTasks(tasks))
          }}>
            {completed ?
                <MdRemoveDone color="#FFFFFF" size={25} />

              : <MdDone color="#FFFFFF" size={25} />
            }
          </button>

          <button onClick={e => {
            e.stopPropagation();
            deleteTask(id)
              .then(() => getAllTasks())
              .then(tasks => setTasks(tasks))
          }}>
            <MdDelete color="#FFFFFF" size={25}/>
          </button>
        </div>
      </div>

      {isEditingTask && (
        <EditTaskModal toggleModal={setIsEditingTask} id={id} title={title} description={description} />
      )}
    </>
  )
}
