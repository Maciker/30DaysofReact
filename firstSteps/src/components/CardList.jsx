import Card from "./Card.jsx";

const cardData = [
  {
    title: "Service number 1",
    description: "Servive number 1 description",
    imageUrl: "https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Service number 2",
    description: "Servive number 2 description",
    imageUrl: "https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Service number 3",
    description: "Servive number 3 description",
    imageUrl: "https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
]
const CardList = () => {
  return (
    <>
      {cardData.map(card => {
        return (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        )
      })}
    </>
    )
}

export default CardList;