import {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class LogInPage extends Component {
  state = {userId: '', pin: '', showErrMsg: false, errorMsg: ''}

  updateUserId = event => this.setState({userId: event.target.value})

  updatePin = event => this.setState({pin: event.target.value})

  submitForm = async () => {
    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const {userId, pin} = this.state
    const userDetails = {user_id: userId, pin}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(response.ok)
    if (response.ok === true) {
      this.onSuccessView(data.jwt_token)
    } else {
      this.onFailureView(data.error_msg)
    }
  }

  onSuccessView = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailureView = errorMsg => {
    this.setState({errorMsg, showErrMsg: true})
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {showErrMsg, errorMsg} = this.state
    return (
      <Link to="/ebank/login">
        <form className="bg-container">
          <div className="login-container">
            <img
              className="login-img"
              alt="website login"
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            />
            <div className="login">
              <h1 className="heading">Welcome Back!</h1>
              <label className="label" htmlFor="userId">
                User ID
              </label>
              <input
                type="text"
                onChange={this.updateUserId}
                className="input"
                id="userId"
                key="userId"
                placeholder="Enter User ID"
              />
              <label className="label" htmlFor="pin">
                PIN
              </label>
              <input
                type="password"
                id="pin"
                onChange={this.updatePin}
                className="input"
                key="pin"
                placeholder="Enter PIN"
              />
              <button
                type="submit"
                className="button"
                onClick={this.submitForm}
              >
                Login
              </button>
              {showErrMsg && <p className="error-message">*{errorMsg}</p>}
            </div>
          </div>
        </form>
      </Link>
    )
  }
}

export default LogInPage
