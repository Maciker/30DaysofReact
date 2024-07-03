import './card.css'
const Card = () => {
  const title = "Card Title";
  const description = "This is the Card Description";
  const imageUrl = "https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <>
      <div className='card'>
        <img src={imageUrl} alt="Card visual"/>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Description Length: {description.length} characters</p>
      </div>
    </>
  )
}

export default Card;