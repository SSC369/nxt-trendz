import {Component} from 'react'
import './index.css'

class Header extends Component {
  optionsContainer = () => (
    <ul className="options-container">
      <li className="option-item">
        <p className="option">Home</p>
      </li>
      <li className="option-item">
        <p className="option">Products</p>
      </li>
      <li className="option-item">
        <p className="option">Cart</p>
      </li>
      <li className="option-item">
        <button type="button" className="logout-button">
          Logout
        </button>
      </li>
    </ul>
  )

  optionsIconContainer = () => (
    <ul className="option-icon-container">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="nav-icon"
        />
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="nav-icon"
        />
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="nav-icon"
        />
      </li>
    </ul>
  )

  render() {
    return (
      <nav className="navbar">
        <div className="nav-inner-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="nav-website-logo"
            alt="website logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            className="nav-logout"
            alt="nav logout"
          />
          {this.optionsContainer()}
        </div>
        {this.optionsIconContainer()}
      </nav>
    )
  }
}

export default Header
