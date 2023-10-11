// Write your code here
import './index.css'

const EventItem = props => {
  const {eachEventItem, eventClickHandler, activeEventId} = props
  const {id, imageUrl, name, location} = eachEventItem

  const activeElementClassName = id === activeEventId ? 'active-element' : null
  const onClickEventImage = () => {
    eventClickHandler(id, eachEventItem)
  }

  return (
    <li className="event-item">
      <button
        type="button"
        className="event-image-btn"
        onClick={onClickEventImage}
      >
        <img
          src={imageUrl}
          alt="event"
          className={`event-image ${activeElementClassName}`}
        />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
