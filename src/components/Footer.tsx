import { Box, Typography, Container } from '@mui/material';
import './CSS files/Footer.css';

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
              <Typography variant="body1" sx={{ fontSize:16 }}>{label}:</Typography>
              <Typography variant="h6" sx={{ color: '1E3A8A', fontWeight: 'bold', fontSize:16 }}>{value}</Typography>
            </Box>
          );
        }
        )}
      </Container>
    </Box>
  );
};

export default Footer;