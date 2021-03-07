
import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment'
import Card from '@material-ui/core/Card';

const styles = () => ({
  root: {
    padding: '24px',
    backgroundColor: '#FFFFFF',
    minWidth: 275
  },
  table: {
    width:'100px',

  },
})



export class AgendaView extends React.Component{
    constructor(props) {
        super(props);
        
      }

      createData(name,date, duration) {
        return { name, date, duration };
      }

      
      getAgendaTable(){
        const { classes,agendaTimeSlots } = this.props;

        let rows = []
        for (const [key, value] of Object.entries(agendaTimeSlots)) {
          let agendaName = value.attributes.title
          let agendaDate = moment(value.attributes.startTime).format('MMMM Do YYYY, h:mm:ss a')
          let agendaDuration = value.attributes.duration

          rows.push(this.createData(agendaName,agendaDate,agendaDuration, 6.0, 24, 4.0))
        }
        
        return (
          <div className = {classes.tableWrapper}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="agenda table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Duration</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.duration}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </div>
        );
      }
  
  render() {

    const { classes } = this.props;
    return (
      <Card className={classes.root}>
          {this.getAgendaTable()}
      </Card>
    )
  }
}

export default withStyles(styles)(AgendaView)