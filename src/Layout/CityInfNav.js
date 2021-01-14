import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Paper, InputBase, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = theme => ({
  root: {
    padding: '5px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "100vh",
    marginTop: theme.spacing(2),
    marginLeft: 12,
    marginRight: 12
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
});

class CINav extends React.Component {
  constructor() {
    super();
    var city;
  }

  search_city = (props) => {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + this.city + '&appid=acceb6b6e7d088d76859f1755a08afa3').then(response => response.json()).then(data => {
      console.log(data)
      var to_content = [
        data[0]['name'],
        data[0]['lat'],
        data[0]['lon'],
        data[0]['country']
      ]
      this.props.WeatherCall(to_content);
    }).catch(err => alert("Wrong city name!"))
  }

  handleChange = (event) => {
    this.city = event.target.value
  }

  render() {

    const {classes} = this.props;

    return (<Paper component="form" className={classes.root}>
      <InputBase onChange={this.handleChange} className={classes.input} placeholder="Input your city name" inputProps={{
          'aria-label' : 'search google maps'
        }}/>
      <IconButton onClick={this.search_city.bind(this)} className={classes.iconButton} aria-label="search">
        <SearchIcon/>
      </IconButton>

    </Paper>)
  }
}

export default withStyles(useStyles)(CINav)
