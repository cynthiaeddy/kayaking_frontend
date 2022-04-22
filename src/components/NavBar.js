import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class NavBar extends React.Component {
  constructor(props) {
    super()
    this.state = {
      width: window.innerWidth,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }

  render() {
    let isMobile
    let isTablet
    let width = this.state.width
    width <= 500 ? (isMobile = true) : (isMobile = false)
    width <= 900 ? (isTablet = true) : (isTablet = false)
    let buttonSize
    let navbarStyle
    if (isMobile) {
      buttonSize = 'small'
      navbarStyle = 'NavBar mobile'
    } else if (isTablet) {
      buttonSize = 'medium'
      navbarStyle = 'NavBar tablet'
    } else {
      buttonSize = 'large'
      navbarStyle = 'NavBar desktop'
    }

    return (
      <div className={navbarStyle}>
        <Link to="/">
          <Button size={buttonSize}>home</Button>
        </Link>
        <Link to="/newtrip">
          <Button size={buttonSize}>new trips</Button>
        </Link>
        <Link to="/dictionary">
          <Button size={buttonSize}>dictionary</Button>
        </Link>
        <br />
        <br />
        <br />
      </div>
    )
  }
}

export default NavBar
