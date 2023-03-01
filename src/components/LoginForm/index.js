import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    name: '',
    pass: '',
    errorMsg: '',
  }

  componentWillUnmount() {
    this.setState({pass: '', name: ''})
  }

  onChangeName = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onChangePass = event => {
    this.setState({pass: event.target.value})
  }

  onCorrectCredentials = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {name, pass} = this.state
    const userDetails = {
      username: name,
      password: pass,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    const msg = `*${data.error_msg}`
    if (response.ok === true) {
      this.onCorrectCredentials()
    } else {
      this.setState({errorMsg: msg})
    }
  }

  render() {
    const {name, pass, errorMsg} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login-image"
          />
        </div>
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login-form-website-logo"
          />
          <div className="input-container">
            <label htmlFor="name" className="input-heading">
              USERNAME
            </label>
            <input
              onChange={this.onChangeName}
              value={name}
              type="text"
              id="name"
              className="input-element"
              placeholder="Username"
            />
          </div>
          <div className="input-container">
            <label htmlFor="pass" className="input-heading">
              PASSWORD
            </label>
            <input
              onChange={this.onChangePass}
              value={pass}
              type="password"
              id="pass"
              className="input-element"
              placeholder="Password"
            />
          </div>
          <div className="button-container">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
          <div className="input-container">
            <p className="err-msg">{errorMsg}</p>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
