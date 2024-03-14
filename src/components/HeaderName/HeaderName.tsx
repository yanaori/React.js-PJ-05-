import React from "react";
import s from "./style.module.css";

interface HeaderNameProps {
    headerName: string;
}

 export const HeaderName: React.FC<HeaderNameProps> = ({headerName}) => {
    return (
            <h1 className={s.title}>{headerName}</h1>
    );
};