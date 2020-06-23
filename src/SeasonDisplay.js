import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr it is cold!",
    iconName: "snowflake",
  },
};

//func para retornar lat e mes (new Date().getMonth())
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
    //se month entre 3 e 8, avalia condicao seguinte que é lat
    //se lat > 0 (hemisferio norte), entao "summer", caso cont "winter"
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  //ES2016 - criar as var text e iconName

  return (
    //ES2015 - pegar o valor da const icon (snowflake ou sun) e colocar na tag i
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
