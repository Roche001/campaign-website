import React from "react";
import "./Hidden.css";

const Hidden = () => {
  return (
    <div id="Hidden" className="container-fluid">
      <div className="hidden-head">
        <h5>Hidden Wounds – How Violence Affects Children’s Mental health </h5>
      </div>
      <div className="hidden-text">
        <p>
          The aim of any society is zero violence against children. More
          children are exposed to various forms of violence each year. They
          experience it in different types and in many areas, whether it is
          online, offline, in schools, in their homes, or in communities.
          Generally, children can be the main targets of violence, can witness
          it, or can be exposed to it. It is apparent that violence has more
          severe effects on children’s mental health. For instance, their
          exposure to violence might often be more traumatic, including evoking
          toxic responses to stress. Such experience might also cause immediate
          and long-life psychological harm. The consequences of violence against
          them can include borderline personality disorder, depression, anxiety,
          suicide, eating problems, and several other disorders. So, what needs
          to be done? Efficient actions start with prevention and early
          interventions, often focusing on the aspects of violence and those
          that can safeguard them within their families, schools, and cities
          (SRSG, 2021).{" "}
        </p>
        <img
          className="img-responsive"
          src="./assets/child-abuse.jpg"
          alt="child-abuse"
        />
      </div>
      <div className="notes-3">
        <h5>Notes:</h5>
        Despite its high pervasiveness, violence against children is often
        concealed, under-reported, and undetected. As a result of fear and
        intimidation, stigma, and societal approval of violence, only a few
        cases are reported. This problem is compounded by a lack of enough
        children’s sensitive and appropriate methods of complaint or reporting
        processes. Besides its devastating costs, violence has a massive
        negative influence on children’s present and future lives.
      </div>
    </div>
  );
};

export default Hidden;
