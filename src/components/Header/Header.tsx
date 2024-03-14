import React, { useState } from "react";
import { HeaderName } from "../HeaderName/HeaderName"
import { AvatarMenu } from "../AvatarMenu/AvatarMenu";
import s from "./style.module.css";

interface HeaderProps {
    headerName: string;
}

export const Header: React.FC<HeaderProps> = ({ headerName }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as Element).closest(s.containerNav)) {
            return;
        }
        setIsOpen(!isOpen)

        console.log(isOpen)
        console.log(setIsOpen)
    };

    return (
        <header className={s.header}>
            <div className={s.headerWrapper}>
                <HeaderName
                    headerName={headerName} />
                <div className={s.avatarMenu}>
                    <AvatarMenu
                        className={s.userAvatar}
                        src={'/user-avatar.svg'}
                        alt="User Avatar" />
                    <AvatarMenu
                        className={isOpen ? s.arrowUp : s.arrowDown}
                        src={isOpen ? '/arrow-up.svg' : '/arrow-down.svg'}
                        alt={isOpen ? 'Arrow up' : 'Arrow down'}
                        onClick={toggleMenu}
                    />
                </ div>
                {isOpen && (
                    <nav className={s.containerNav}>
                        <img className={s.rectangle}
                            src={'/rectangle.svg'}
                            alt='rectangle' />
                        <ul className={s.menuList}>
                            <li><a className={s.listItem} href="#">Profile</a></li>
                            <li><a className={s.listItem} href="#">Log Out</a></li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};