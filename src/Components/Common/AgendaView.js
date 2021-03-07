
import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = () => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '900px',
    backgroundColor: '#D2C5DD'
  },
  table: {
    minWidth: 650,
  },
})



export class AgendaView extends React.Component{
    constructor(props) {
        super(props);
        
      }

      createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }

      
      getAgendaTable(){
        const { classes,agendaTimeSlots } = this.props;

        let rows = []
        for (const [key, value] of Object.entries(agendaTimeSlots)) {
          console.log(`${key}: ${value.attributes.title}`);
          rows.push(this.createData(value.attributes.title,159, 6.0, 24, 4.0))
        }
        console.log("agendaTimes",agendaTimeSlots)
        
  

        return (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Duration</TableCell>
                  <TableCell align="right">Country</TableCell>
                  <TableCell align="right">Region</TableCell>
                  <TableCell align="right">Industry</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      }
  
  render() {

    const { classes } = this.props;
    return (
      <div className={classes.root}>
          Agenda View
          {this.getAgendaTable()}
      </div>
    )
  }
}

export default withStyles(styles)(AgendaView)