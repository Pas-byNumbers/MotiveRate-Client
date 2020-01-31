import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import WelcomePic from '../components/WelcomePic'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const LandingPageContainer = () => {
  const classes = useStyles();
  return (
    <Box>
      <Container align="middle">
          <WelcomePic />
        </Container>
    </Box>
  )
    
        
}

export default LandingPageContainer
