import React from 'react'

const ReviewCard = ({allreview}) => {
    
  return (
    <div className="animalCard">
    <div className="addAnimalimg">
  <img src={allreview.image} />
  <h3 className="font">Name: {allreview.name}</h3>
<div className="aboutanimal-text">
  <p className="font">About me: {allreview.about}</p>
</div>
</div>
</div>
  )
}

export default ReviewCard