import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Landing = () => (
  <section id="home" className="landing">
    <div className="dark-overlay">
      <div className="landing-inner">
        <h1 className="x-large">Raisely Questions</h1>
        <p className="lead">
          I hope you enjoy the answer I gave to the questions.{' '}
        </p>
        <p className="lead">
          This was an interesting experience overall but I enjoyed it.
        </p>
        <AnchorLink href="#scroll-here" className="scroll-handler">
          Lets see those answers!
        </AnchorLink>
      </div>

      <span id="scroll-here" />
    </div>
  </section>
);

export default Landing;
