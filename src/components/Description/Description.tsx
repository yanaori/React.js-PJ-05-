import { ICard } from '../../interfaces/cards.ts';
import { useNavigate, useParams } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { Button } from '../Button/Button.tsx';
import s from './style.module.css'

interface IDescription {
    tasks: ICard[]
    setTasks: (tasks: ICard[]) => void
}
export const Description = (props: IDescription) => {
    const { tasks, setTasks } = props;
    const { taskId } = useParams()
    const navigate = useNavigate()
    const [value, setValue] = useState<string>('')
    const task = tasks.find(task => task.id === taskId)
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }
    const handleSaveDescription = () => {
        setTasks(tasks.map(task => task.id === taskId ? { ...task, description: value } : task))
    }
    return (
        <div className={s.wrapperDescription}>
            <div className={s.containerDescription}>
                <div className={s.boxDescription}>
                    <h2>{task?.title}</h2>
                    <textarea className={s.textarea} onChange={handleChange}>{task?.description || "This task has no description"}</textarea>
                </div>
                <Button className={s.buttonDescriptionOff} onClick={() => navigate(-1)}>
                    <span ></span>
                    <span ></span>
                </Button>
                <Button className={s.buttonDescription} onClick={handleSaveDescription}>Save</Button>
            </div>
        </div>
    );
};
