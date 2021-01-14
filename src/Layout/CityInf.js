import React, {useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Paper, Grid} from '@material-ui/core';
import CINav from './CityInfNav'

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    height: "90vh"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  contenter: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: '45vh',
    fontSize: "5vh"
  }
});

class CityInf extends React.Component {
  constructor() {
    super();
    this.state = {
      get_data: [
        []
    ]
    }
  }

  data_scrapper = (weather) => {
    this.state.get_data = weather
    this.forceUpdate();
  }

  render() {
    const {classes} = this.props;

    return (<div className={classes.root}>
      <Grid container="container" spacing={3}>
        <CINav WeatherCall={this.data_scrapper.bind(this)}/>
        <Grid item="item" xs={12}>
          <Paper className={classes.contenter}>
            <div>
              City name: {this.state.get_data[0]}<br/>
              City latitude: {this.state.get_data[1]}<br/>
              City longitude: {this.state.get_data[2]}<br/>
              Country: {this.state.get_data[3]}<br/>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>);
  }
}

export default withStyles(useStyles)(CityInf)
