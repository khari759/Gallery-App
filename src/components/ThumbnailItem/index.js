import './index.css'

const Footer = props => {
  const {imageItem, getActiveId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageItem
  const buttonClassName = isActive ? 'selected' : 'not-selected'

  const setActiveId = () => {
    getActiveId(id)
  }

  return (
    <li>
      <button type="button" onClick={setActiveId} className="btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={buttonClassName}
        />
      </button>
    </li>
  )
}

export default Footer
