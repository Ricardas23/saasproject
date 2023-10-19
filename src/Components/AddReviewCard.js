import React from 'react'
import { useRef, useState } from 'react';
import ReviewCard from './ReviewCard';
import userEvent from '@testing-library/user-event';

const AddReviewCard = ({allreviews, setAllReviews}) => {

  const nameInput = useRef()
  const imageInput = useRef()
  const myReviewInput = useRef()

  const [userReviews, setUserReview] = useState([])
  const [getError, setError] = useState("");
  // const [filteredAnimals,  setFilteredAnimals] = useState(userReviews)
  // const [allreviews, setAllReviews] = useState([])


    function addAnimal() {
        if (nameInput.current.value.length < 4) {
          return setError("User name is too short");
        }
    
        if (nameInput.current.value.length > 20) {
          return setError("User name is too long");
        }
    
        if (!imageInput.current.value.includes("http")) {
          return setError("select valid image.");
        }
    
        if (userReviews.length === 20) {
          return setError("Max Has been reached");
        }
        
        
        const myPost = {
          name: nameInput.current.value,
          image: imageInput.current.value,
          about: myReviewInput.current.value,
        };
        setUserReview([...userReviews, myPost]);
        
        setError("");
      }
      
  return (
    <div className="add-review-container">
    <div className="animal-info">
      <input ref={nameInput} type="text" placeholder="Username"></input>
      {/* <input ref={animalAgeInput} type="number" placeholder="Age"></input> */}
      <input
        ref={imageInput}
        type="text"
        id="image"
        placeholder="Image"
      />
      <input
        ref={myReviewInput}
        type="text"
        placeholder="Tell us about"
      />

      <button className="btn-addAnimal" onClick={addAnimal}>
        Add Review
      </button>
      {getError && <h3 style={{ color: "red" }}>{getError}</h3>}

      </div>

<div className='reviewcardcontainer'>
{allreviews
            .map((x) => (
              <ReviewCard
                userReview={x}
              />
            ))}
</div>

      </div>
  )
}

export default AddReviewCard