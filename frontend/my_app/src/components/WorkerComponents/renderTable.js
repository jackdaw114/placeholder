import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material';
import './renderTable.css';
import { useNavigate } from 'react-router';
import axios from 'axios';
import theme from '../../design/palette';
// Complete icon
import TaskAltIcon from '@mui/icons-material/TaskAlt';
// Accept icon
import DoneIcon from '@mui/icons-material/Done';
// Decline Icon
import CloseIcon from '@mui/icons-material/Close';




export default function renderTable(props) {

  const update = (action, id) => {
    axios.post('worker/updatetransaction', { action: action, id: id }, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    }).then((res) => {
      console.log(res)
    }).catch(err => console.log(err))
  }




  return (
    <>
      <Typography variant='h4'>
        {props.heading}
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Address</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {props.arr.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.userID}
                </TableCell>
                <TableCell align="right">{row.dos}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="center" className='t'>
                  <Box className='status-button-box'>
                    {props.buttons_arr && (props.buttons_arr).map((item) => {

                      const color1 = (item == 'Complete') ? theme.palette.secondary.main : (item == 'Decline') ? 'red' : 'green';
                      const icon1 = (item == 'Complete') ? <TaskAltIcon/>:(item == 'Decline') ?<CloseIcon/>:<DoneIcon/>
                      //const color1 = 'warning';
                      return (
                        <Box>
                          <Button variant="contained" sx={{ backgroundColor: color1 }} className='button'
                            onClick={() => update(item, row._id)} endIcon={icon1}
                          >{item}</Button>
                        </Box>
                      )
                    })}

                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}