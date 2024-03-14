import React, { ChangeEvent } from "react";

interface InputProps {
    className: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ className, onChange }) => {
    return (
        <input className={className} onChange={onChange}></input>
    )
}