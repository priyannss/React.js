import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h3>ℹ️ About Page</h3>
      <button onClick={() => navigate(-1)}>⬅ Go Back</button>
    </div>
  );
}

export default About;
