import {Link, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import HeaderPage from '../HeaderPage'
import './index.css'

const HomePage = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }

  return (
    <>
      <HeaderPage />
      <Link to="/">
        <div className="card-container">
          <h1 className="heading">Your Flexibility, Our Excellence</h1>
          <img
            className="card"
            alt="digital card"
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          />
        </div>
      </Link>
    </>
  )
}

export default HomePage
