import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Paper, Grid} from '@material-ui/core';
import Nav from './Geo_nav'


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
         geo_coord: "",
         loca: "",
         Fweatehr: "",
         Dweather: "",
         conditionals: "",
         f_like: "",
         wind_speed: "",
         humidity: "",
         pressure: "",
         cond_icon: "",
         icon: "",
      }
  }

   data_scrapper=(weather)=>{
     this.state.loca = weather[0]
     this.state.geo_coord = weather[1] + ', ' +  weather[2]
     this.state.Fweather = Math.ceil(weather[3]) + 'K'
     this.state.Dweather = Math.ceil(weather[3] - 273) + 'C'
     this.state.conditionals = weather[4]
     this.state.cond_icon = 'http://openweathermap.org/img/wn/' + weather[5] + '@2x.png'
     this.state.icon = <img style={{width:'4vh', height: '4vh'}} src={this.state.cond_icon}/>
     this.state.feels_like = Math.ceil(weather[6] - 273) + 'C'
     this.state.wind_speed = weather[7] + 'm/p'
     this.state.humidity = weather[8]
     this.state.pressure = weather[9] + 'P'
      console.log(weather)
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
                Geographical coordinates = {this.state.geo_coord} <br/>
                Location = {this.state.loca} <br/>
              Current weather(Kelvins) = {this.state.Fweather} <br/>
                Current weather = {this.state.Dweather} <br/>
              Current conditionals = {this.state.conditionals} {this.state.icon}<br/>
            Feels like = {this.state.feels_like} <br/>
          Wind speed = {this.state.wind_speed} <br/>
        Humidity = {this.state.humidity}<br/>
      Pressure = {this.state.pressure} <br/>

              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(Content)
