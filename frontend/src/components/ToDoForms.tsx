import { FormEvent } from 'react'
import { useTasks } from '../context/TaskContext.tsx'
import { createTask, getAllTasks } from '../api'

export const INPUT_STYLES = "h-12 md:h-14 w-2/3 pl-6 pr-2 border outline-none bg-neutral-50 focus:shadow-xl border-neutral-500/20 shadow-md rounded"
export const ToDoForms = () => {
  const { setTasks} = useTasks()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const resetForm = () => (e.target as HTMLFormElement).reset()

    const form = e.currentTarget as HTMLFormElement

    if (form) {
      const taskTitle = form.querySelector<HTMLInputElement>('[name="task-title"]')?.value
      const taskDescription = form.querySelector<HTMLInputElement>('[name="task-description"]')?.value

      createTask({ title: taskTitle, description: taskDescription, })
        .then(() => getAllTasks())
        .then(tasks => {
          setTasks(tasks)
          resetForm()
        })
    }
  }

  return (
    <div className="flex flex-wrap w-full justify-center align-middle mt-10 mb-20">
      <div
        className="flex flex-wrap justify-center align-center text-center bold mb-10 text-2xl md:text-4xl text-slate-200">
        What are your tasks for the day?
      </div>
      <form
        className="flex flex-col flex-wrap justify-center items-center gap-4 w-full"
        onSubmit={handleSubmit}
      >
        <input name="task-title" type="text" placeholder="Create a title..." className={INPUT_STYLES} />
        <input name="task-description" type="text" placeholder="Add a description..." className={INPUT_STYLES} />

        <button
          type="submit"
          className="flex items-center justify-center rounded border min-w-[60px] w-2/3 bg-none p-3 italic text-1xl text-neutral-50 md:p-2 md:w-30 mt-5 md:m-0 transition ease-in-out hover:text-gray-500 delay-150 duration-150"
        >
          ...and create your task!
        </button>
      </form>
    </div>
  )
}