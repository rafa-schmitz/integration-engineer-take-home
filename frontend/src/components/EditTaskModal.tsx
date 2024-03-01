import React, { FormEvent, useState } from 'react'
import { getAllTasks, updateTask } from '../api'
import { useTasks } from '../context/TaskContext.tsx'
import { INPUT_STYLES } from './ToDoForms.tsx'
import { type ITask } from '../types/task.ts'
import { MdClose } from 'react-icons/md'

interface IModalProps extends Partial<ITask> {
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>
}
export const EditTaskModal = ({ toggleModal, id, title, description }: IModalProps) => {
  const { setTasks} = useTasks()
  const [taskTitleValue, setTaskTitleValue] = useState(title)
  const [taskDescriptionValue, setTaskDescriptionValue] = useState(description)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateTask({ id: id, title: taskTitleValue, description: taskDescriptionValue })
      .then(() => getAllTasks())
      .then(tasks => setTasks(tasks))
      .then(() => toggleModal(false))
  }

  return (
    <div className="fixed bg-fixed flex justify-center items-center h-screen z-40">
      {/* Modal overlay */}
      <div className="fixed inset-0 bg-black opacity-50"/>

      {/* Modal content */}
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg z-50">
          {/* Modal header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Edit your task</h2>
            <button
              onClick={() => toggleModal(false)}
              className="focus:outline-none"
            >
              <MdClose color="#000" size={25} />
            </button>
          </div>

          {/* Modal body */}
          <form
            className="flex flex-col flex-wrap justify-center items-center gap-2 w-full lg:flex-row lg:flex-nowrap"
            onSubmit={handleSubmit}
          >
            <input name="task-title"  type="text" value={taskTitleValue} onChange={(e) => setTaskTitleValue(e.currentTarget.value)} placeholder="Update title" className={INPUT_STYLES}/>
            <input name="task-description" type="text" value={taskDescriptionValue} onChange={(e) => setTaskDescriptionValue(e.currentTarget.value)} placeholder="Update description" className={INPUT_STYLES}/>

            <button
              type="submit"
              className="h-full text-gray-500 hover:text-gray-700 flex items-center justify-center rounded border bg-none p-3 italic text-1xl border-neutral-300"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}