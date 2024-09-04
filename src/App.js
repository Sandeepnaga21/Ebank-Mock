import './App.css'
import {Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'
import NotFoundPage from './components/NotFoundPage'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/ebank/login" component={LogInPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
)

export default App
