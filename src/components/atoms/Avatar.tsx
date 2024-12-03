import { Avatar } from '@mui/material';
import React from 'react';

interface AvatarAtomProps {
    src: string;
    alt: string;
    size?: number;
}

const AvatarAtom: React.FC<AvatarAtomProps> = ({ src, alt, size = 50 }) => {
    return <Avatar sx={{ height: size, width: size }} src={src} alt={alt} />;
};

export default AvatarAtom;
