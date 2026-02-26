import React from "react";
import Review from "./Review";
import "./../styles/App.css";

function App() {
  return (
    <section className="container">
      <h1 id="review-heading">Our Reviews</h1>
      <main>
        <Review />
      </main>
    </section>
  );
}

export default App;
