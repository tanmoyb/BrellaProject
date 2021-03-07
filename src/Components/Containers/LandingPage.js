
import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AgendaView from '../Common/AgendaView'
import normalize from 'json-api-normalizer'
import SideBar from  '../Common/SideBar'

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: '#eeeaf1;'
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
      <div className = {classes.root}>
        <div>
         <SideBar></SideBar>
        </div>
      <div className={classes.contentWrapper}>
        
          <AgendaView agendaTimeSlots = {this.state.agendaTimeSlots}></AgendaView>
      </div>
      </div>
    )
  }
}

export default withStyles(styles)(LandingPage)