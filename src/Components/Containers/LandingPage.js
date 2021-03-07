
import * as React from 'react'
import Axios from 'axios'
import { withStyles } from '@material-ui/core/styles'


const styles = () => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: '#D2C5DD'
  }
})


export class LandingPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          agenda: {}
        };
        
      }
  
  componentDidMount() {
    Axios.get('https://api.brella.io/api/aalto/events/unicorndemo2025/time_slots').
        then(res =>{
            console.log("res",res)
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
      </div>
    )
  }
}

export default withStyles(styles)(LandingPage)