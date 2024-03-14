import './App.css'
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ETasksStatus, ICard } from './interfaces/cards.ts';
import { Main } from './components/Main/Main.tsx';
import { Description } from './components/Description/Description.tsx';
import { Header } from './components/Header/Header.tsx';
import { Footer } from './components/Footer/Footer.tsx';
import tasksData from './interfaces/tasksData.ts'

enum ELocalStorageKeys {
    Tasks = 'tasks'
}

function App() {
    const storedTasks = localStorage.getItem(ELocalStorageKeys.Tasks);
    const initialState = storedTasks ? JSON.parse(storedTasks) : [];

    console.log('storedTasks:', storedTasks);
    console.log('initialState:', initialState);

    localStorage.setItem('tasks', JSON.stringify(initialState));

    console.log('Значение сохранено в локальное хранилище.');

    const [tasks, setTasks] = useState<ICard[]>(tasksData)
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const BacklogTasksCount = tasks.filter(task => task.status === ETasksStatus.Backlog).length;
    const finishedTasksCount = tasks.filter(task => task.status === ETasksStatus.Finished).length;
    const name = 'Яна';
    const year = '2024';
    const headerName = 'Awesome Kanban Board'


    return (
        <div className="wrappe-box">
            <Header headerName={headerName} />
            <Routes>
                <Route path={'/'} element={<Main tasks={tasks} setTasks={setTasks} />} />
                <Route path={'/tasks/:taskId'} element={<Description tasks={tasks} setTasks={setTasks} />} />
            </Routes>
            <Footer BacklogTasksCount={BacklogTasksCount} finishedTasksCount={finishedTasksCount} name={name} year={year} />
        </div>
    )
}

export default App
