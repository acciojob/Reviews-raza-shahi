import React, { useState } from "react";

const Review = () => {
  const reviewData = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviewData[index];
  const checkNumber = (number) => {
    if (number > reviewData.length - 1) return 0;
    if (number < 0) return reviewData.length - 1;
    return number;
  };
  const prevReview = () => {
    setIndex(checkNumber(index - 1));
  };
  const nextReview = () => {
    setIndex(checkNumber(index + 1));
  };
  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * reviewData.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <div className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
      </div>
      <h2 className="author" id={`author-${id}`}>
        {name}
      </h2>
      <p className="job">{job}</p>
      <p>{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevReview}>
          Prev
        </button>
        <button className="next-btn" onClick={nextReview}>
          Next
        </button>
      </div>
      <button onClick={randomReview} className="random-btn">surprise me</button>
    </div>
  );
};

export default Review;
