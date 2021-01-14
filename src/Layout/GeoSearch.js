import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Paper, Grid} from '@material-ui/core';
import Nav from './GeoSearchNav'


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

class GeoSearch extends React.Component {
  constructor() {
    super();
    var lon, lat;
    this.state = {
         geo_coord: "",
         cities: "",
      }
  }

   data_scrapper=(weather, lon, lat)=>{
     this.state.cities = ""
     this.lon = lon
     this.lat = lat
      console.log(weather)
      for(let i = 1; i < weather[0]+1; i++){
        this.state.cities += weather[i] + ", "
      }
      this.state.cities = this.state.cities.substring(0, this.state.cities.length - 2)
      if(this.state.cities == "") this.state.cities="No cities at this place"
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
              <Grid container spacing={3}>
                <Grid item xs>
                  Latitude: {this.lat}
                </Grid>
                <Grid item xs>
                  Longitude: {this.lon}<br/>
                </Grid>
                <Grid item xs={12}>
                  Nearby cities: {this.state.cities}
                </Grid>

            </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(GeoSearch)
