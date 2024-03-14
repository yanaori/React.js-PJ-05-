import React from "react";
import s from './style.module.css'

const FooterText: React.FC<{ children: string }> = ({ children }) => {

  return (
    <div className={s.footerText}>
      <p className={s.text}>{children}</p>
    </div>
  );
};

interface FooterProps {
  BacklogTasksCount: number;
  finishedTasksCount: number;
  name: string;
  year: string
}

export const Footer: React.FC<FooterProps> = ({ BacklogTasksCount, finishedTasksCount, name, year }) => {
  const footerTextData = [
    { children: `Active tasks: ${BacklogTasksCount}` },
    { children: `Finished tasks: ${finishedTasksCount}` },
  ];
  return (
    <footer className={s.footer}>
      <div className={s.countText}>
        {footerTextData.slice(0, 2).map((data, index) => (
          <FooterText key={index} children={data.children} />
        ))}
      </div>
      <FooterText children={`Kanban board by ${name}, ${year}`} />
    </footer>
  );
};
