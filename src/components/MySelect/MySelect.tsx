import React from "react";
import { ETasksStatus, ICard } from "../../interfaces/cards";
import Select, { CSSObjectWithLabel, SingleValue, } from "react-select";
import s from "./style.module.css"
import dropdownIndicator from '../../image/dropdownIndicator.svg';

interface SelectProps {
    className?: string
    allTasks: ICard[]
    type: ETasksStatus
    onChange: (option: SingleValue<{ value: string; label: string; }> | null) => void
}

const DropdownIndicator = () => {
    return (
        <div className={s.dropdownIndicator}>
            <img src={dropdownIndicator} alt="Dropdown indicator" />
        </div>
    );
};

export const MySelect: React.FC<SelectProps> = ({ onChange, allTasks, type, }) => {
    const options = allTasks
        .filter(task => Object.values(ETasksStatus).indexOf(task.status) === Object.values(ETasksStatus).indexOf(type) - 1)
        .map(task => (
            { value: task.id, label: task.title }
        ));

    const customStyles = {
        indicatorSeparator: () => ({
            width: '0px'
        }),
        option: (provided: CSSObjectWithLabel) => ({
            ...provided,
            cursor: 'pointer',
        }),
        control: (provided: CSSObjectWithLabel) => ({
            ...provided,
            borderRadius: '5px',
            boxShadow: 'none', // Убирает тень вокруг поля ввода
            border: 'none', // Убирает рамку вокруг поля ввода
        }),
    };

    return (
        <Select
            className={s.select}
            components={{ DropdownIndicator }}
            options={options}
            theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                    ...theme.colors,
                    primary25: '#DEDEDE',
                    primary: '#FFFFFF',
                },
            })}
            onChange={onChange}
            placeholder=""
            styles={customStyles}
        >
        </Select>
    )
}

