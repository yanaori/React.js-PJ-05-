import React from "react";

interface AvatarMenuProps {
    className?: string
    src: string
    alt: string
    onClick?: React.MouseEventHandler<HTMLImageElement>
}

export const AvatarMenu: React.FC<AvatarMenuProps> = ({ className, src, alt, onClick }) => {
    return (
        <img className={className}
            src={src}
            alt={alt}
            onClick={onClick} />
    )
}

