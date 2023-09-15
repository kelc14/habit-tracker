import React from "react";
import "./Habit.css";

const Habit = ({ habit }) => {
  return (
    <div className="Habit">
      <div className="Habit-left">
        <h4 className="Habit-name">{habit}</h4>
        <p className="Habit-streak">Streak: 1 units 🔥</p>
      </div>
      <div className="Habit-right">
        <p className="Habit-data">0/1</p>
      </div>
    </div>
  );
};

export default Habit;
