
import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Drawer, Divider}  from '@material-ui/core'; 

const styles = () => ({
    root: {
      width: '100%',
      height: '900px',
      backgroundColor: '#FFFFFF'
    },
    drawer: {
        width: '150px',
        flexShrink: 0,
      },
      drawerPaper: {
        width: '110px',
      },
  })


export class SideBar extends React.Component{
    constructor(props) { 
        super(props); 
      } 
      
      render() { 
        const { classes } = this.props;
        return ( 
          <div> 
        
            <Drawer 
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            > 
                
            </Drawer> 
          </div> 
        ); 
      } 
}

export default withStyles(styles)(SideBar)