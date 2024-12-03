
import React from 'react';

interface AvatarAtomProps {
    src: string;
    alt: string;
    size?: number;
    sx?:object;
}

const AppAvatar: React.FC<AvatarAtomProps> = ({ src, alt, size = 50 }) => {
    return <AppAvatar sx={{ height: size, width: size }} src={src} alt={alt} />;
};

export default AppAvatar;