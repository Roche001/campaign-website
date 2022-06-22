import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div id="Home" className="container-fluid">
      <div className="home">
        <div className="home-header">
          <h2>Take Action!</h2>
          <h5>Stop the Violence.</h5>
        </div>
      </div>

      <div className="text-head">
        <h4>The Consequences of Violence on Community Mental Health</h4>
        <div className="text-head-small">
          <h6> Posted:June 22, 2022</h6>
          <small>By: Rocherr</small>
        </div>
      </div>
      <div className="home-paragraph">
        <p>
          Indeed, violence in its several forms can impact the mental health of
          individuals in a community in many ways. Such violence often affects
          victims, perpetrators, <br />
          and all community members at large. Some of these effects include
          increased cases of depression, suicide, and anxiety. Besides, other
          victims can also suffer from
          <br /> posttraumatic stress and heart-related complications that might
          cause premature deaths. However, the health effects of violence in any
          community can vary with <br />
          the forms of violence, sex, and age of those targeted. No matter the
          type of violence that people face, their experience might cause severe
          and lifelong consequences. <br />
          There is no question that violence in communities inflicts serious
          mental health challenges on members. More than fifty percent of those
          who experience violence are
          <br /> diagnosed with severe mental problems. Usually, women who
          experience gender-based violence report depression, anxiety, and
          posttraumatic trauma throughout their <br />
          lives. They also experience suicidal ideation and drug and substance
          abuse issues which pose significant problems to themselves and their
          communities. In addition,
          <br /> these effects not only their present and future, but also their
          families, children, and loved ones.{" "}
        </p>
      </div>
    </div>
  );
};

export default Home;
