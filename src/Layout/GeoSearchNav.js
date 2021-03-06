import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Paper, InputBase, IconButton, Grid} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = theme => ({
  root: {
    padding: '5px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "47vh",
    marginTop: theme.spacing(2),
    marginLeft: 12,
    marginRight: 12
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(6),
    padding: 10,
    width: '10.5vh',
    height: '10.5vh'
  },
  divider: {
    height: 28,
    margin: 4
  }
});

class Nav extends React.Component {
  constructor() {
    super();
    var lon,
      lat;
  }

  search_city = (props) => {
    fetch('http://api.openweathermap.org/geo/1.0/reverse?lat=' + this.lat + '&lon=' + this.lon + '&limit=8&appid=acceb6b6e7d088d76859f1755a08afa3').then(response => response.json()).then(data => {
      console.log(data)
      var to_content = []
      to_content.push(data.length - 1)
      for (let i = 0; i < data.length - 1; i++) {
        to_content.push(data[i]['name'])
      }
      this.props.WeatherCall(to_content, this.lon, this.lat);
    }).catch(err => alert("Wrong latitude/longitude!"))
  }

  handleChangeLat = (event) => {
    this.lat = event.target.value
  }

  handleChangeLon = (event) => {
    this.lon = event.target.value
  }

  render() {

    const {classes} = this.props;

    return (<Grid container="container" spacing={3}>
      <Grid item="item" xs={6}>
        <Paper component="form" className={classes.root}>
          Latitude:
          <InputBase onChange={this.handleChangeLat} className={classes.input} placeholder="Input your latitude" inputProps={{
              'aria-label' : 'search google maps'
            }}/>
        </Paper>

        <Paper component="form" className={classes.root}>
          Longitude:
          <InputBase onChange={this.handleChangeLon} className={classes.input} placeholder="Input your longitude" inputProps={{
              'aria-label' : 'search google maps'
            }}/>
        </Paper>
      </Grid>
      
      <Grid item="item" xs={6}>
        <IconButton onClick={this.search_city.bind(this)} className={classes.iconButton} aria-label="search">
          <SearchIcon/>
        </IconButton>
      </Grid>
    </Grid>)
  }
}

export default withStyles(useStyles)(Nav)
