import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Paper, InputBase, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = theme => ({
  root: {
    padding: '5px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "83vw",
    marginTop: theme.spacing(2),
    marginLeft: 12,
    marginRight:12,
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
  },
});


class Nav extends React.Component {
  constructor() {
    super();
    var city;
  }

  search_city=(props)=>{
       fetch('http://api.openweathermap.org/data/2.5/forecast?q='+ this.city +'&appid=acceb6b6e7d088d76859f1755a08afa3')
         .then(response => response.json())
         .then(data => {
           console.log(data)
           var to_content = [[data['city']['name'], data['list'][0]['main']['temp'],
         data['list'][0]['weather'][0]['description'], data['list'][0]['weather'][0]['icon']],
         [data['list'][1]['main']['temp'],
       data['list'][1]['weather'][0]['description'], data['list'][1]['weather'][0]['icon']],
       [data['list'][2]['main']['temp'],
     data['list'][2]['weather'][0]['description'], data['list'][2]['weather'][0]['icon']],
     [data['list'][3]['main']['temp'],
   data['list'][3]['weather'][0]['description'], data['list'][3]['weather'][0]['icon']],
   [data['list'][4]['main']['temp'],
  data['list'][4]['weather'][0]['description'], data['list'][4]['weather'][0]['icon']]]
           this.props.WeatherCall(to_content);
         })
       .catch(err => alert("Wrong city name!"))
   }

   handleChange=(event)=>{
     this.city=event.target.value
   }

  render(){


    const { classes } = this.props;

    return(
      <Paper component="form" className={classes.root}>
        <InputBase onChange={this.handleChange} className={classes.input} placeholder="Input your city name" inputProps={{
            'aria-label' : 'search google maps'
          }}/>
        <IconButton onClick={this.search_city.bind(this)} className={classes.iconButton} aria-label="search">
          <SearchIcon/>
        </IconButton>

      </Paper>
    )
  }
}

export default withStyles(useStyles)(Nav)
