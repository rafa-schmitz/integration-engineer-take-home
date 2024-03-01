import { ToDoItemCard } from './ToDoItemCard.tsx'
import { useTasks } from '../context/TaskContext.tsx'

export const ToDoItemList = () => {
  const { tasks} = useTasks();

  return (
    <div className="flex justify-center flex-col w-full gap-2">
      {tasks?.map((task, idx) => (
        <ToDoItemCard { ...task } key={idx}  />
      ))}
    </div>
  )
}
