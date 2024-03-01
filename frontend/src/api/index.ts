import { type ITask } from '../types/task'
import { notifications } from '@mantine/notifications'

const API_URL = import.meta.env.VITE_API_URL
export const getAllTasks = async (): Promise<ITask[]> => {
  const res = await fetch(`${API_URL}/tasks`)

  return await res.json() satisfies ITask[]
}

export const createTask = async (task: Partial<ITask>): Promise<ITask> => {
  const res = await fetch(`${API_URL}/tasks`, {
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task),
    method: "POST",
  })

  const data = await res.json()

  if (data.error) {
    notifications.show({
      title: 'Failed to create task!',
      message: data.error,
      styles: {
        body: { padding: "20px" },
        closeButton: { color: "white", height: "50px", position: "absolute", right: 0, top: 0 },
        root: { display: "flex", justifyContent: "center", position: "absolute", right: 0, top: 0, backgroundColor: "red", borderRadius: "5px", width: "300px", height: "100px" },
        title: { color: "white" },
        description: { color: "white", fontStyle: "italic" },
      },
    })
  }

  return data satisfies ITask[]
}

export const updateTask = async (task: Partial<ITask>): Promise<ITask> => {
  const res = await fetch(`${API_URL}/tasks/${task.id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task),
    method: "PUT",
  })

  // add toasts

  const data = await res.json()

  if (data.error) {
    notifications.show({
      title: 'Failed to update task!',
      message: data.error,
      styles: {
        body: { padding: "20px" },
        closeButton: { color: "white", height: "50px", position: "absolute", right: 0, top: 0 },
        root: { display: "flex", justifyContent: "center", position: "absolute", right: 0, top: 0, backgroundColor: "red", borderRadius: "5px", width: "300px", height: "100px" },
        title: { color: "white" },
        description: { color: "white", fontStyle: "italic" },
      },
    })
  }

  return data satisfies ITask[]
}

export const deleteTask = async (id: string): Promise<void> => {
  const res = await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
  })

  const data = await res.json()

  if (data.error) {
    notifications.show({
      title: 'Failed to delete task!',
      message: data.error,
      styles: {
        body: { padding: "20px" },
        closeButton: { color: "white", height: "50px", position: "absolute", right: 0, top: 0 },
        root: { display: "flex", justifyContent: "center", position: "absolute", right: 0, top: 0, backgroundColor: "red", borderRadius: "5px", width: "300px", height: "100px" },
        title: { color: "white" },
        description: { color: "white", fontStyle: "italic" },
      },
    })
  }

  return data
}
