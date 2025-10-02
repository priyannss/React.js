import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    // programmatic navigation
    navigate("/about");
  };

  return (
    <div>
      <h3>🏠 Home Page</h3>
      <p>Click the button below to navigate programmatically:</p>
      <button onClick={goToAbout}>Go to About</button>
    </div>
  );
}

export default Home;
