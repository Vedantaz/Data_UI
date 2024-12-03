
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Paper} from '@mui/material';

import CollapsibleRow from '../../molecules/collapsibleRow';
import { rows } from '../../../data/rows';
import { projectRows } from '../../../data/projectRows';
import {hoursData} from '../../../data/hoursData';
import './styles.css';

const useStyles = () => ({
  tableHeading: {
    fontSize: '20px',
    fontWeight: 'bold',
    padding: '10px',
    textAlign: 'center',
    color: 'white',
  }
});

export default function BasicTable() {

  const styles = useStyles();
  return (

    <Box className='tableBox1'>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className='tablehead1' >
            <TableRow sx={{ fontWeight: 'bold' }}>
              <TableCell />
              <TableCell sx={styles.tableHeading} >Name</TableCell>
              <TableCell sx={styles.tableHeading}>Update</TableCell>
              <TableCell sx={styles.tableHeading}>Role</TableCell>

              <TableCell sx={styles.tableHeading}>Projects</TableCell>
              <TableCell sx={styles.tableHeading}>Team</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map((row) => (
                projectRows.filter((project) => row.userId === project.userId).map((project, index) => (

                  <CollapsibleRow
                    key={`${row.userId}-${project.pName}`}
                    row={row}
                    projects={project}
                    hours={hoursData[index]}
                  />

                ))
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
