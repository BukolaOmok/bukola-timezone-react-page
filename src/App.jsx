import React from "react";
import TimeZoneDisplay from "./Date.jsx";
import "./App.css";

function GetTimeOfDay(city) {
  const timeZones = {
    London: 0,
    Nigeria: 1,
    "New York": -4,
    Tokyo: 9,
  };

  const date = new Date();
  const hours = date.getHours();
  const mins = date.getMinutes();

  const offset = timeZones[city];
  let localHours = hours + offset;

  if (localHours >= 24) {
    localHours -= 24;
  } else if (localHours < 0) {
    localHours += 24;
  }

  const localTimeString = `${localHours.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}`;

  return localTimeString;
}

export default function App() {
  const londonTime = GetTimeOfDay("London");
  const nigeriaTime = GetTimeOfDay("Nigeria");
  const newYorkTime = GetTimeOfDay("New York");
  const tokyoTime = GetTimeOfDay("Tokyo");

  return (
    <div>
      <h1>Some Global Time Zones:</h1>
      <TimeZoneDisplay city="London" time={londonTime} />

      <TimeZoneDisplay city="Nigeria" time={nigeriaTime} />

      <TimeZoneDisplay city="New York" time={newYorkTime} />

      <TimeZoneDisplay city="Tokyo" time={tokyoTime} />
    </div>
  );
}
