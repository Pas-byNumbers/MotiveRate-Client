import React from 'react'
import introGIF from '../assets/MotiveRate_Intro.gif'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  div: {
    height: 1000
  },
  image: {
    height: 500,
    width: 1000,
    margin: 20
  }
  
});
const WelcomePic = () => {
  const classes = useStyles()

  return (
    <div className={classes.div} >
      <img alt="intro-animation" src={introGIF} className={classes.image} ></img>
    </div>
  )
}

export default WelcomePic
