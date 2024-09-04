import {Component} from 'react'
import {Link} from 'react-router-dom'
import HeaderPage from '../HeaderPage'
import './index.css'

class HomePage extends Component {
  render() {
    return (
      <Link to="/">
        <HeaderPage />
        <div className="card-container">
          <h1 className="heading">Your Flexibility, Our Excellence</h1>
          <img
            className="card"
            alt="digital card"
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          />
        </div>
      </Link>
    )
  }
}

export default HomePage
