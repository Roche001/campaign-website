import React from "react";
import "./Wellbeing.css";
const Wellbeing = () => {
  return (
    <section
      id="Wellbeing"
      className="container"
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
      <div className="space">
        <h3>Visuals</h3>
        <img  src="./assets/Post4.png" alt="Post4" />
        <p>The image above depicts an ongoing guidance and counseling session among different individuals. Based on the discussions on impacts of violence on various members of the society, it is important to focus on finding ways of helping survivors of violence lead a normal life. There are several strategies to promote the mental wellness of victims and survivors of violence in the community, including children, youth, and women. Making an emotional safety plan, looking for professional mental health support, developing self-care programs, discovering survivors' strengths, and learning more about establishing personal boundaries are a few of these methods. Additionally helpful are family partnerships and mental health resources, as well as seeking trauma-informed care.</p>
        <img src="./assets/post5.png" alt="post5" />
        <p>Members of society encounter a variety of forms of violence. Due to the prevalence of gender-based violence around the world, this section will mostly address it. Gender-based violence is one of the most egregious forms of human abuse in many civilizations and is intimately related to gender inequality. Violence against a person that is motivated by their gender is referred to as gender-based violence. Gender-based violence affects both men and women, however the majority of victims are women and girls. Because gender-based violence is a global pandemic that affects one in three women in her lifetime, this section concentrates on it. </p>
        <h3>Infographics</h3>
        <img src="./assets/post6.png" alt="Post6" />
        <p>When women and girls are subjected to any form of violence, their human rights are violated. Recent findings and stories from people on the front lines indicate that all forms of violence against women and girls, including domestic abuse, have increased since the COVID-19 outbreak. The COVID-19 problem is causing the Shadow Pandemic to spread, and we must all work together to halt it. The capacity of critical services, such domestic abuse shelters and helplines, has been reached as COVID-19 cases continue to put a pressure on health care. Prioritizing the prevention of violence against women in COVID-19 response and recovery activities requires more work.</p>
      </div>
      <div className="video">
        <h3>Video</h3>
      <iframe src="https://www.youtube.com/embed/ox4eiSAQJPU?autoplay=1&rel=0&cc_load_policy=1&iv_load_policy=3&controls=0&disablekb=1" width="560" height="315" title="Join the White Ribbon Campaign and stop violence against women" frameborder="0" allowfullscreen></iframe>
      <p>The European Union and the rest of the globe both have a horrible reality about violence against women. Most often, men commit it. It is a result of gender inequality, but it nevertheless goes unrecognized and unchallenged much too frequently. It is the goal of the White Ribbon Campaign to change this. Men and boys who wear the White Ribbon promise never to use violence against women, to justify it, or to keep quiet about it. One of the biggest global programs to stop male violence against women is called White Ribbon. It began in Canada in 1991 and is currently prevalent in numerous nations all over the world. </p>
      </div>
      <div className="action">
        <h3>Action Toolkit</h3>
        <h2>Stand Up!</h2>
        <h2>Speak Out!</h2>
        <h2>Take Action!</h2>
        <p>Join the many youth activities around the world with a mission:to end violence women and girls. Ending this disgraceful global scourge is a huge task, but not an impossible one. It means breaking the silence about violence against women and girls through promoting a culture of respect and zero tolerance. It also critically involves partnering with men and boys to build this culture, and help eliminate gender stereotypes.</p>
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
