import { ChangeEvent, useState } from 'react';
import { ETasksStatus, ICard } from "../../interfaces/cards.ts";
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button.tsx';
import { Input } from '../Input/Input.tsx';
import { MySelect } from '../MySelect/MySelect.tsx';
import { SingleValue } from 'react-select';
import s from "./style.module.css"

interface ITasks {
    tasks: ICard[]
    allTasks: ICard[]
    type: ETasksStatus
    addNewTask: (value: string) => void;
    updateTaskStatus: (id: string, status: ETasksStatus) => void;
}

export const Board = (props: ITasks) => {
    const { tasks, type, addNewTask, allTasks, updateTaskStatus } = props;
    const [value, setValue] = useState<string>('')
    const [showSelect, setShowSelect] = useState<boolean>(false);
    const [isAddingTask, setIsAddingTask] = useState<boolean>(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const handleSelectChange = (option: SingleValue<{ value: string; label: string; }>) => {
        // updateTaskStatus(option.value, type);
        if (option) {
            updateTaskStatus(option.value, type);
        }
        setShowSelect(false);
    };

    // функция для проверки, пуст ли список задач в предыдущем статусе
    const handlePreviousListCheck = () => {
        let isPreviousListEmpty = false;

        if (type === ETasksStatus.Backlog) {
            // нет предыдущего списка
        } else if (type === ETasksStatus.Ready) {
            isPreviousListEmpty = allTasks.filter(task => task.status === ETasksStatus.Backlog).length === 0;
        } else if (type === ETasksStatus.InProgress) {
            isPreviousListEmpty = allTasks.filter(task => task.status === ETasksStatus.Ready).length === 0;
        } else if (type === ETasksStatus.Finished) {
            isPreviousListEmpty = allTasks.filter(task => task.status === ETasksStatus.InProgress).length === 0;
        }
        return isPreviousListEmpty;
    };
    //  функция, которая устанавливает isAddingTask в false после добавления новой задачи.
    const handleAddTask = () => {
        addNewTask(value);
        setIsAddingTask(false);
    };
    const handleButtonChange = () => {
        setShowSelect(true);
        setIsAddingTask(true);
    };

    return (
        <div className={s.containerBoard}>
            <div className={s.board}>
                <p className={s.status}>
                    {type}
                </p>
                <div className={s.linkContainer}>
                    {tasks.map(task => {
                        return (
                            <Link
                                className={s.link}
                                to={`/tasks/${task.id}`}
                                key={task.id}>{task.title}</Link>
                        )
                    })}
                </div>
                {type === ETasksStatus.Backlog && !isAddingTask && (
                    <Button
                        className={s.button}
                        onClick={handleButtonChange}
                    >
                        + Add card
                    </Button>
                )}
                {type === ETasksStatus.Backlog && isAddingTask && (
                    <>
                        <Input
                            className={s.input}
                            onChange={handleInputChange}
                        />
                        <Button
                            className={s.buttonSubmit}
                            onClick={handleAddTask}>
                            Submit
                        </Button>
                    </>
                )}
                {showSelect && Object.values(ETasksStatus).indexOf(type) > 0 && (
                    <MySelect
                        onChange={handleSelectChange}
                        allTasks={allTasks}
                        type={type} />
                )}
                {!showSelect && Object.values(ETasksStatus).indexOf(type) > 0 && (
                    <Button
                        className={handlePreviousListCheck() ? s.disabledButton : s.button}
                        onClick={handleButtonChange}
                        disabled={handlePreviousListCheck()}>
                        + Add card
                    </Button>
                )}
            </div>
        </div>
    )
}