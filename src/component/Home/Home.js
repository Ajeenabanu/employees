import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const Navigate = useNavigate();
  return (
    <div className="homepage">
      <div className="homebutton">
        <div className="homelist">
          <button className="first" onClick={() => Navigate("/list")}>
            Employee List
          </button>
          <button className="second" onClick={() => Navigate("/add")}>
            Create A Employee
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
