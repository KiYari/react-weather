import React from 'react';
import Header from '../Layout/Header'
import Content from '../Layout/Content'
import {makeStyles, Container} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  bg: {
    background: 'linear-gradient(#e66465, #9198e5)',
    height: "100vh",
    flexGrow: 1
  },
  weather: {
    marginTop: theme.spacing(4),
    backgroundColor: '#cfe8fc',
    borderRadius: 10,
    width: "100vh",
    height: "70vh"
  }
}));

export default function Main(props) {

  const classes = useStyles();

  return (<div className={classes.bg}>
    <Header/>
    <Container className={classes.weather}>
      <Content/>
    </Container>

  </div>);

}
