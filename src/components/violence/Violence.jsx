import React from "react";
import "./Violence.css";
const Violence = () => {
  return (
    <div id="Violence" className="container-fluid">
      <div className="violence-head">
        <h5>The effects of violence on youths in the community</h5>
      </div>
      <div className="violence-text">
        <img
          className="img-responsive"
          src="./assets/youth.jpg"
          alt="Violence "
        />
        <p>
          Community violence is often seen as a global health problem that
          permits immediate measures. Often, young people are among the most
          vulnerable groups to the effects of violence, especially those living
          in settings with chronic violence. High-crime cities often affect more
          than half of the youths. For instance, different studies have studied
          how local homicides and related crimes affect youths’ mental health,
          including posttraumatic stress disorders (Cuartas & Roy, 2019). There
          is overwhelming evidence of how elements of safety and direct violence
          exposure adversely affect communities and people’s relationships. Most
          youths living in neighborhoods with increased homicides and related
          crimes have worse mental health and suffer from severe posttraumatic
          stress.{" "}
        </p>
      </div>
      <div className="notes-2">
        <h5>Notes:</h5>
        <p>
          From the above discussion, there is no doubt that violence affects
          youths in diverse ways. Those who perceive their settings and
          neighborhoods as safe often report fewer mental health problems
          compared to those who live in violent and dangerous areas, including
          cities. Therefore, the effect of violence on mental health is usually
          worse for youths living in high-crime and impoverished areas as
          compared to low-crime and higher-income regions (Cuartas & Roy, 2019).
          The bottom line is that violence in all its forms affects all youths,
          not just those directly exposed to it.{" "}
        </p>
      </div>
    </div>
  );
};

export default Violence;
