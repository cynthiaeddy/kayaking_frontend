import React from 'react'
import Word from './Word'
import { Card } from 'semantic-ui-react'

class Words extends React.Component {
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

  renderWords(words) {
    return words.map((word) => <Word key={word.id} word={word} />)
  }

  render() {
    console.log('props', this.state, this.props.words)
    let width = this.state.width
    let isMobile
    width <= 500 ? (isMobile = true) : (isMobile = false)

    let isTablet
    width <= 900 ? (isTablet = true) : (isTablet = false)

    let isLaptop
    width <= 1200 ? (isLaptop = true) : (isLaptop = false)

    let isDesktop
    width <= 1800 ? (isDesktop = true) : (isDesktop = false)

    let itemsPerRow
    if (isMobile) {
      itemsPerRow = 1
    } else if (isTablet) {
      itemsPerRow = 2
    } else if (isLaptop) {
      itemsPerRow = 3
    } else if (isDesktop) {
      itemsPerRow = 4
    }

    return (
      <Card.Group itemsPerRow={itemsPerRow}>
        {this.renderWords(this.props.words)}
      </Card.Group>
    )
  }
}

export default Words
