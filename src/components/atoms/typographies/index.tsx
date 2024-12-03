import React from 'react';

interface TypographyAtomProps {
  variant: 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
  children: React.ReactNode;
  styles?:object;
}

const AppTypography: React.FC<TypographyAtomProps> = ({ variant, children, styles }) => {
  return <AppTypography variant={variant} styles={styles}>{children} </AppTypography>;
};

export default AppTypography;
