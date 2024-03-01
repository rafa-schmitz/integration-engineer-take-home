import { ToDoItemList } from './components/ToDoItemList.tsx'
import { TasksProvider } from './context/TaskContext.tsx'
import { ToDoForms } from './components/ToDoForms.tsx'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
const App = () => {
  return (
    <main className="flex align-middle justify-center flex-col w-full h-full md:max-w-3xl gap-2 p-8">
      <TasksProvider>
        <MantineProvider>
          <Notifications />
          <ToDoForms />
          <ToDoItemList />
        </MantineProvider>
      </TasksProvider>
    </main>
  );
}

export default App;
