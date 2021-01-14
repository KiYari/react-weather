import React, {useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Paper, Grid} from '@material-ui/core';
import Nav from './DaysForecastNav'

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
    height: '40vh',
    fontSize: "3.8vh"
  },
  cityname: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: 'center',
    height: '4vh',
    fontSize: "4.5vh"
  },
  castitem: {
    backgroundColor: '#d9ffe4',
    borderRadius: 10,
    color: theme.palette.text.primary,
    fontSize: "1.6vh",
    height: '40vh'
  }
});

class DFcast extends React.Component {
  constructor() {
    super();

    this.state = {
      get_data: [
        [], [], [], [], []
      ],
      today: new Date()
    }
  }

  data_scrapper = (weather) => {
    this.state.get_data = weather
    console.log(this.state.get_data)

    this.forceUpdate();
  }

  render() {
    const {classes} = this.props;

    return (<div className={classes.root}>
      <Grid container="container" spacing={3}>
        <Nav WeatherCall={this.data_scrapper.bind(this)}/>

        <Grid item="item" xs={12}>
          <Paper className={classes.cityname}>
            <div>
              {this.state.get_data[0][0]}
            </div>
          </Paper>
        </Grid>

        <Grid item="item" xs={12}>
          <Paper className={classes.contenter}>
            <Grid container="container">
              <Grid className={classes.castitem} item="item" xs="xs">
                {this.state.today.getDate()}.{this.state.today.getMonth() + 1}. {this.state.today.getFullYear()}<br/>
                Temperature(Kelvins) = {this.state.get_data[0][1]}<br/>
                Conditionals = {this.state.get_data[0][2]}
              </Grid>
              <Grid className={classes.castitem} item="item" xs="xs">
                {this.state.today.getDate() + 1}.{this.state.today.getMonth() + 1}. {this.state.today.getFullYear()}<br/>
                Temperature(Kelvins) = {this.state.get_data[1][0]}<br/>
                Conditionals = {this.state.get_data[1][1]}
              </Grid>
              <Grid className={classes.castitem} item="item" xs="xs">
                {this.state.today.getDate() + 2}.{this.state.today.getMonth() + 1}. {this.state.today.getFullYear()}<br/>
                Temperature(Kelvins) = {this.state.get_data[2][0]}<br/>
                Conditionals = {this.state.get_data[2][1]}
              </Grid>
              <Grid className={classes.castitem} item="item" xs="xs">
                {this.state.today.getDate() + 3}.{this.state.today.getMonth() + 1}. {this.state.today.getFullYear()}<br/>
                Temperature(Kelvins) = {this.state.get_data[3][0]}<br/>
                Conditionals = {this.state.get_data[3][1]}
              </Grid>
              <Grid className={classes.castitem} item="item" xs="xs">
                {this.state.today.getDate() + 4}.{this.state.today.getMonth() + 1}. {this.state.today.getFullYear()}<br/>
                Temperature(Kelvins) = {this.state.get_data[4][0]}<br/>
                Conditionals = {this.state.get_data[4][1]}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>);
  }
}

export default withStyles(useStyles)(DFcast)
