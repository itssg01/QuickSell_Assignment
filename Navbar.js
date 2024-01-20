import React from "react";
import "./Navbar.css";

function Navbar({ onGroupingOptionChange, onSortOptionChange }) {
  return (
    <div className="navbar">
      <button onClick={() => onGroupingOptionChange("status")}>
        Group by Status
      </button>
      <button onClick={() => onGroupingOptionChange("user")}>
        Group by User
      </button>
      <button onClick={() => onGroupingOptionChange("priority")}>
        Group by Priority
      </button>
      <button onClick={() => onSortOptionChange("priority")}>
        Sort by Priority
      </button>
      <button onClick={() => onSortOptionChange("title")}>Sort by Title</button>
    </div>
  );
}

export default Navbar;
