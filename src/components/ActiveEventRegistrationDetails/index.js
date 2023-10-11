// Write your code here
import './index.css'

const statuses = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventItem} = props
  const {registrationStatus} = activeEventItem
  console.log(registrationStatus)

  const renderDefault = () => (
    <p className="registration-default-description">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistered = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="registered-para">
        You have already registered for the event
      </h1>
    </>
  )

  const renderYetToRegister = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="yet-to-register-para">
        A live performance brings so much to your relationship with dance,
        Register
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </>
  )

  const renderRegistrationClosed = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registration-closed-image"
      />
      <h1 className="yet-to-register-para">Registrations Are Closed Now!</h1>
      <p className="registration-default-description">
        Stay tuned. We will reopen
      </p>
    </>
  )

  const renderSwitch = () => {
    switch (registrationStatus) {
      case statuses.registered:
        return renderRegistered()
      case statuses.yetToRegister:
        return renderYetToRegister()
      case statuses.registrationsClosed:
        return renderRegistrationClosed()
      default:
        return renderDefault()
    }
  }

  return <div className="registration-section">{renderSwitch()}</div>
}

export default ActiveEventRegistrationDetails
