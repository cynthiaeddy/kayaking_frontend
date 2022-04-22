import React from 'react'
import { connect } from 'react-redux'
import { addTrip } from '../actions/tripsAction'
import { DateInput } from 'semantic-ui-calendar-react'
import { Button } from 'semantic-ui-react'

class TripForm extends React.Component {
  state = {
    name: '',
    water_type: '',
    start_date: '',
    end_date: '',
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addTrip(this.state)
    this.setState({ name: '', water_type: '' })
    this.props.history.push('/')
  }

  handleOnChange = (e, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value })
    }
  }

  handleIfChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} className="form">
        <div className="ui form trip">
          <div className="fields">
            <div className="five wide field">
              <input
                onChange={this.handleIfChange}
                value={this.state.name}
                type="text"
                name="name"
                placeholder="new trip name"
                autoComplete="off"
              />
              <br />
            </div>
            <div className="three wide field water-type">
              <label>
                water type
                <select
                  onChange={this.handleIfChange}
                  value={this.state.water_type}
                  type="text"
                  name="water_type"
                  placeholder="water type"
                  autoComplete="false"
                  hideMobileKeyboard={true}
                >
                  <option value="select">select below</option>
                  <option value="bay">bay</option>
                  <option value="lake">lake</option>
                  <option value="ocean">ocean</option>
                  <option value="river">river</option>
                </select>
              </label>
            </div>
            <div className="three wide field">
              <DateInput
                onChange={this.handleOnChange}
                type={this.DateInput}
                dateFormat="MM-DD-YY"
                value={this.state.start_date}
                animation="off"
                iconPosition="left"
                name="start_date"
                placeholder="start date"
                autoComplete="off"
                hideMobileKeyboard={true}
              />
            </div>
            <div className="three wide field">
              <DateInput
                onChange={this.handleOnChange}
                type={this.DateInput}
                dateFormat="MM-DD-YY"
                value={this.state.end_date}
                animation="off"
                iconPosition="left"
                name="end_date"
                placeholder="end date"
                autoComplete="off"
                hideMobileKeyboard="true"
              />
            </div>
            <div className="two wide field">
              <Button type="submit" size="mini" className="ui button submit">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default connect(null, { addTrip, DateInput })(TripForm)
