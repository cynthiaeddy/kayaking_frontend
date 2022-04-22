import React from 'react'
import CommentsContainer from '../containers/CommentsContainer'
import { Card, Image, Icon, Button } from 'semantic-ui-react'
// import { deleteTrip } from '../actions/tripsAction'
// import { connect } from 'react-redux'

class Trip extends React.Component {
  state = {
    front: true,
  }

  toggleCard = () => {
    this.setState((prevState) => {
      return { front: !prevState.front }
    })
  }

  render() {
    const { trip } = this.props

    return (
      <Card>
        <Image src={trip.image} />

        <div className="style head">
          <Card.Header>{trip.name}</Card.Header>
        </div>

        {this.state.front ? (
          <>
            <Card.Content>
              <Card.Description>
                <h4>
                  water type:
                  <br /> {trip.water_type}
                  <br />
                  start date:
                  <br /> {trip.start_date}
                  <br />
                  end date:
                  <br /> {trip.end_date}
                </h4>
                <hr></hr>
              </Card.Description>

              <Card.Content extra>
                <a>
                  <Icon
                    name="delete"
                    onClick={() => this.props.deleteTrip(trip.id)}
                  />{' '}
                  delete trip
                </a>

                <hr />
                <br />
                <Button size="mini" onClick={this.toggleCard}>
                  flip for comments
                </Button>
              </Card.Content>
            </Card.Content>
          </>
        ) : (
          <Card.Content>
            <CommentsContainer tripId={trip.id} />
            <br />
            {/* <hr/><br/> */}
            <Button size="mini" onClick={this.toggleCard}>
              flip for front
            </Button>
          </Card.Content>
        )}
      </Card>
    )
  }
}

export default Trip

// <Like tripId={trip.id} tripLike={trip.like}/>
