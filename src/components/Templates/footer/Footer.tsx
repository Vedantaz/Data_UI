import { Box, Typography, Container } from '@mui/material';
import '../footer/Footer.css';
import TypographyAtom from '../../atoms/Typography';

const Footer = () => {
  return (
    <Box className='footer-box'
    >
      <Container className='footer-container'
      >
        {['Total Employees:  100', 'Logged-in Employees: 45', 'Total Projects: 5', 'Total Hours Logged: 2000'].map((text, index) => {
          const [label, value] = text.split(': ').map(str => str.trim());

          return (
            <Box className='typeBox'
              key={index}>
              <TypographyAtom variant="body1" styles={{ fontSize:16 }}>{label}:</TypographyAtom>
              <TypographyAtom variant="h6" styles={{ color: '1E3A8A', fontWeight: 'bold', fontSize:16 }}>{value}</TypographyAtom>
            </Box>
          );
        }
        )}
      </Container>
    </Box>
  );
};

export default Footer;