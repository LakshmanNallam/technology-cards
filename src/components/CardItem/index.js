import './index.css'

const CardItem = props => {
  const {eachitem} = props
  const {description, title, className, imgUrl} = eachitem
  return (
    <li className={`${className} cardss`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="imgconn">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
