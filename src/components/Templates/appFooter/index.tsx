import { Box, Container } from '@mui/material';
import './styles.css';
import AppTypography from '../../atoms/typographies';


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
              <AppTypography variant="body1" styles={{ fontSize:16 }}>{label}:</AppTypography>
              <AppTypography variant="h6" styles={{ color: '1E3A8A', fontWeight: 'bold', fontSize:16 }}>{value}</AppTypography>
            </Box>
          );
        }
        )}
      </Container>
    </Box>
  );
};

export default Footer;