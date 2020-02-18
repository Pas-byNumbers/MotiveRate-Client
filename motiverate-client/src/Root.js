import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App'

const theme = createMuiTheme({
  typography: {
    "fontFamily": "\"Saira\", sans-serif",
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightBold": 700
   }
})

const Root = ({ store }) => (
  <Provider store={store}>
  <ThemeProvider theme={theme}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
    </ThemeProvider>
  </Provider>
)
Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root