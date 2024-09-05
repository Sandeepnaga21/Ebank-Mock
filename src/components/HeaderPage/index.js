import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const HeaderPage = props => {
  const {history} = props
  const onClickLogOutBtn = () => {
    Cookies.remove('jwt_token')
    history.replace('/')
  }

  return (
    <div className="header">
      <nav className="nav-bar">
        <img
          className="logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        />
        <button type="button" onClick={onClickLogOutBtn} className="button">
          LogOut
        </button>
      </nav>
    </div>
  )
}

export default withRouter(HeaderPage)
