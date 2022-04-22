import React from 'react'
import Trip from './Trip'
import { Card, Container } from 'semantic-ui-react'

class Trips extends React.Component {
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

  renderTrips(trips) {
    const tripSort = trips.sort(
      (a, b) =>
        new Date(...b.start_date.split('/').reverse()) -
        new Date(...a.start_date.split('/').reverse())
    )
    return tripSort.map((trip, idx) => (
      <Trip key={idx} trip={trip} deleteTrip={this.props.deleteTrip} />
    ))
  }

  render() {
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
      <Container>
        <Card.Group itemsPerRow={itemsPerRow}>
          {this.renderTrips(this.props.trips.trips)}
        </Card.Group>
      </Container>
    )
  }
}

export default Trips
