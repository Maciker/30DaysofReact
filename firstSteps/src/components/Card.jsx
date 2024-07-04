import './card.css'
const Card = ({title, description, imageUrl}) => {

  return (
    <>
      <div className='card'>
        <img src={imageUrl} alt="Card visual"/>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Description Length: {description?.length} characters</p>
      </div>
    </>
  )
}

export default Card;