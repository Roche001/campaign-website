import React from "react";
import "./Wellbeing.css";
const Wellbeing = () => {
  return (
    <section
      id="Wellbeing"
      className="container-fluid
    "
    >
      <div className="wellbeing-header">
        <h5>
          Ways to Foster Mental health Wellbeing for Victim-Survivors in the
          Community
        </h5>
      </div>
      <div className="well-being-text">
        <p>
          There are several ways to foster the mental health wellness of victims
          and survivors of violence, including children, youths, and women, in
          the community. Some of these ways include creating an emotional safety
          plan, exploring survivors’ strengths, creating self-care programs,
          looking for professional mental health support, and learning more
          about setting personal boundaries. Seeking trauma-informed support can
          also help, such as family partnership and mental health resources.{" "}
        </p>
        <div className="notes-4">
          <h5>Note:</h5>
          <p>
            There are several ways to foster the mental health wellness of
            victims and survivors of violence, including children, youths, and
            women, in the community.{" "}
          </p>
        </div>
      </div>
      <div className="reference">
        <h5>References </h5>
        <p>
          Cuartas, J., & Roy, A. L. (2019). The latent threat of community
          violence: Indirect exposure to local homicides and adolescents’ mental
          health in Colombia. American journal of community psychology, 64(1-2),
          219-231.
        </p>
        <p>
          {" "}
          SRSG, U. (2021). Hidden Scars: How Violence Harms the Mental Health of
          Children.
        </p>
      </div>
    </section>
  );
};

export default Wellbeing;
