
import * as React from 'react'
import Axios from 'axios'
import { withStyles } from '@material-ui/core/styles'
import AgendaView from '../Common/AgendaView'
import normalize from 'json-api-normalizer';

const styles = () => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '900px',
    backgroundColor: '#D2C5DD'
  }
})


export class LandingPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          agendaTimeSlots: []
        };
        
      }
  
  componentDidMount() {
    fetch('https://api.brella.io/api/aalto/events/unicorndemo2025/time_slots')
    .then((resp) => resp.json())
    .then((data) => {
      console.log("data",data)
      let normalizedData = normalize(data)

      console.log("normalized data",normalizedData)
      this.setState({
        agendaTimeSlots:normalizedData.timeSlots
      })
    })
        .catch(err =>{
            console.log(err)
        })
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
          Landing Page
          <AgendaView agendaTimeSlots = {this.state.agendaTimeSlots}></AgendaView>
      </div>
    )
  }
}

export default withStyles(styles)(LandingPage)