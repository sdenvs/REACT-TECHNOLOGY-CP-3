// Write your code here.
import './index.css'

const CardItem = props => {
  const {details} = props
  const {title, description, imgUrl, className} = details
  return (
    <div className={`card ${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img className="image" src={imgUrl} alt="avatar" />
    </div>
  )
}

export default CardItem
