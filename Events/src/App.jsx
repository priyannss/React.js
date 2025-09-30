import { useState } from "react";


// events
// onChange, onClick, onSubmit, onMouseOver


// ++++++++++++++++ Important +++++++++++++++++
// remember : don't write the function logic immediately in event otherwise it will call it 
// just after rendering without even clicking or anything
// this is called immediate invocation
// solution write logic in a function and pass reference of the function in the event



function App() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");

  const handleMouseOver = () => {
    alert("You hovered over para");
  }

  const handleClick = () => {
    alert('I am clicked');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name : ", name);
    console.log("Date of birth: ", dob);

    alert("form submitted");
  }

  return (
    <>
      <p
        onMouseOver={handleMouseOver}
        style={{
          border: "1px solid red",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "#ffe6e6",
          color: "#b30000",
          fontFamily: "Arial, sans-serif",
          fontSize: "16px",
          transition: "all 0.3s ease",
          cursor: "pointer",
        }}
      >
        I am a para
      </p>


      <button onClick={handleClick} >Click me</button>



      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "400px",
          margin: "0 auto",
          padding: "1.5rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <label htmlFor="name" style={{ fontWeight: "bold", color: "#333" }}>
          Enter your name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Nobita"
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "1rem",
          }}
        />

        <label htmlFor="dob" style={{ fontWeight: "bold", color: "#333" }}>
          Enter your date of birth
        </label>
        <input
          id="dob"
          type="date"
          onChange={(e) => setDob(e.target.value)}
          style={{
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "1rem",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "0.75rem",
            border: "none",
            borderRadius: "4px",
            backgroundColor: "#4CAF50",
            color: "white",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default App
