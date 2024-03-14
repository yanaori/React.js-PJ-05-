import { ETasksStatus, ICard } from "../../interfaces/cards";
import { Board } from '../Board/Board'
import s from "./style.module.css";

interface IBoard {
    tasks: ICard[]
    setTasks: (tasks: ICard[]) => void
}

export const Main = (props: IBoard) => {
    const { tasks, setTasks } = props;
    const updateTaskStatus = (taskId: string, newStatus: ETasksStatus) => {
        // Находим индекс задачи с указанным идентификатором в массиве tasks.
        const taskIndex = tasks.findIndex(task => task.id === taskId);

        // Если задача найдена, обновляется ее статус.
        if (taskIndex !== -1) {
            const updatedTask = { ...tasks[taskIndex], status: newStatus };

            // Удаляем задачу из ее текущего положения в массиве tasks.
            tasks.splice(taskIndex, 1);

            // Добавляем обновленную задачу в конец массива tasks.
            tasks.push(updatedTask);

            // Обновите состояние задач, чтобы отразить изменения.
            setTasks([...tasks]);
        }
    };

    const addNewTask = (value: string) => {
        if (value.trim() !== '') {
            const newTask: ICard = {
                id: Math.random().toString(),
                title: value,
                description: "",
                status: ETasksStatus.Backlog
            };
            setTasks([...tasks, newTask]);
        }
    }

    return (
        <main className={s.main}>
            <div className={s.wrapper}>
                {Object.values(ETasksStatus).map(type => {
                    const filteredTask = tasks.filter(task => task.status === type);

                    return (
                        <div key={type} >
                            <Board key={type} type={type} updateTaskStatus={updateTaskStatus} tasks={filteredTask} allTasks={tasks} addNewTask={addNewTask} />
                        </div>
                    )
                })}
            </div>
        </main>
    );
};
