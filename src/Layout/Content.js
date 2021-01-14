import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Paper, Grid} from '@material-ui/core';
import Nav from './Nav'


const useStyles = theme => ({
    root: {
      flexGrow: 1,
      height:"90vh",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    contenter: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      height: '45vh',
      fontSize: "3.8vh",
    },
});

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
         cityname: "",
         Fweatehr: "",
         Dweather: "",
         conditionals: "",
         f_like: "",
         country: "",
         wind_speed: "",
         humidity: "",
         pressure: "",
         temperature_fluc: "",
      }
  }

  data_scrapper=(weather)=>{
    this.state.cityname = weather[0] + ', ' + weather[4]
    this.state.Fweather = Math.ceil(weather[1]) + 'K'
    this.state.Dweather = Math.ceil(weather[1] - 273) + 'C'
    this.state.conditionals = weather[2]
    this.state.feels_like = Math.ceil(weather[3] - 273) + 'C'
    this.state.wind_speed = weather[5] + 'm/p'
    this.state.humidity = weather[6]
    this.state.pressure = weather[7] + 'P'
    this.state.temperature_fluc = Math.floor(weather[8] - 273) + 'C' +
                                  ' - ' + Math.ceil(weather[9] - 273) + 'C'
    this.state.cond_icon = 'http://openweathermap.org/img/wn/' + weather[10] + '@2x.png'
    this.state.icon = <img style={{width:'4vh', height: '4vh'}} src={this.state.cond_icon}/>
    this.forceUpdate();
    }

  render() {
    const { classes } = this.props;


    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Nav WeatherCall={this.data_scrapper.bind(this)}/>
          <Grid item xs={12}>
            <Paper className={classes.contenter}>
              <div>
                City name = {this.state.cityname} <br/>
              Current weather(k) = {this.state.Fweather} <br/>
                Current weather = {this.state.Dweather} <br/>
              Current conditionals = {this.state.conditionals} {this.state.icon}<br/>
            Feels like = {this.state.feels_like} <br/>
          Wind speed = {this.state.wind_speed} <br/>
        Humidity = {this.state.humidity}<br/>
      Pressure = {this.state.pressure} <br/>
    Temperature fluctuations = {this.state.temperature_fluc}

              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(Content)
