import React, { useState, useEffect } from 'react';
import Hero from 'scripts/Hero';
import background from 'images/home.jpg';
import resume from 'assets/cv-pierre-bonnin-en.pdf';

function App() {
  const [initialScrollTop, setInitialScrollTop] = useState(0);

  useEffect(() => {
    setInitialScrollTop(window.scrollY);
  }, []);

  return (
    <div data-layout="--grid">
      <Hero
        background={background}
        animate={initialScrollTop === 0}
      />
      <div
        className="wrap"
        data-spe="--padded"
      >
        <div
          className="container"
          data-spe="--small"
          data-layout="--grid"
          data-cols="--s2"
          data-gap="--2--s3"
        >
          <div className="tile tile--primary">
            Sass is my mummy,
            <br />
            React & Vue are both family.
          </div>
          <div className="tile tile--secondary">
            Remote-friendly,
            <br />
            @Toulouse, France.
          </div>
          <div
            className="tile"
            data-col="--s2"
            data-spe="--txt-center"
          >
            {'I\'m currently working on an amazing project 🚀'}
          </div>
        </div>
      </div>
      <div
        className="wrap"
        data-spe="--padded"
      >
        <div
          className="container"
          data-layout="--grid"
          data-gap="--6"
        >
          <div
            data-spe="---txt-center"
            data-layout="--grid"
            data-gap="--2"
          >
            <h1>Frontend senior developer</h1>
            <p>Team spirit - Autonomous - Demanding - Curious</p>
          </div>
          <div
            data-layout="--grid--items-start"
            data-cols="--m2"
            data-gap="--6"
          >
            <div className="skills">
              <ul>
                <li>
                  <h3>Front-End Development</h3>
                  <ul>
                    <li>ReactJS</li>
                    <li>Vuejs</li>
                    <li>Typescript 💓</li>
                    <li>FramerMotion</li>
                    <li>GSAP</li>
                    <li>html</li>
                    <li>(s)css</li>
                    <li>SEO</li>
                  </ul>
                </li>
                <li>
                  <h3>Back-End Development</h3>
                  <ul>
                    <li>Node</li>
                    <li>MySQL</li>
                    <li>PHP</li>
                    <li>mongodb</li>
                  </ul>
                </li>
                <li>
                  <h3>Tools</h3>
                  <ul>
                    <li>Git</li>
                    <li>Docker</li>
                    <li>Jest</li>
                    <li>Webpack</li>
                    <li>Postman</li>
                    <li>Linux</li>
                  </ul>
                </li>
                <li>
                  <h3>UX / UI design</h3>
                  <ul>
                    <li>Mobile First design</li>
                    <li>User standards</li>
                    <li>Accessibility</li>
                    <li>Figma</li>
                    <li>Adobe Creative Cloud</li>
                    <li>Affinity suite</li>
                  </ul>
                </li>
                <li>
                  <h3>Smart contracts Development</h3>
                  <ul>
                    <li>Solidity</li>
                    <li>Ganache</li>
                    <li>Truffle</li>
                    <li>ethers.js</li>
                    <li>web3.js</li>
                    <li>web3-react</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <ul
                className="resume"
                data-spe="--txt-center--mtxt-left"
              >
                <li className="resume__item">
                  <div className="resume__item__header">
                    since 2022
                    <span className="dot" />
                    Interstellar Lab
                    <span className="dot" />
                    Paris
                  </div>
                  <h3 className="resume__item__title">
                    Frontend Developer
                  </h3>
                  <p className="resume__item__sumup">
                    Building frontend app for sustainable food system on earth and space
                  </p>
                  <ul className="resume__item__tasks">
                    <li>React frontend developement, with Redux, GraphQL and Sass</li>
                    <li>Data visualization with Recharts and custom svg generation</li>
                    <li>Design system implementation with Storybook</li>
                  </ul>
                </li>
                <li className="resume__item">
                  <div className="resume__item__header">
                    {'2021 > 2022'}
                    <span className="dot" />
                    Kiv Finance
                    <span className="dot" />
                    Toulouse
                  </div>
                  <h3 className="resume__item__title">
                    Software engineer
                  </h3>
                  <p className="resume__item__sumup">
                    &ldquo;Startup adventure&rdquo; in a US company targeting
                    the US insurance market
                  </p>
                  <ul className="resume__item__tasks">
                    <li>B2b & b2c apps design and fullstack development (node, react, scss)</li>
                    <li>Ethereum & Polygon smart contract development + NFT minting</li>
                  </ul>
                </li>
                <li className="resume__item">
                  <div className="resume__item__header">
                    {'2020 > 2021'}
                    <span className="dot" />
                    Inbenta
                    <span className="dot" />
                    Toulouse
                  </div>
                  <h3 className="resume__item__title">
                    Fullstack developer
                  </h3>
                  <p className="resume__item__sumup">
                    Selfcare products development (chatbots, faq...) for top 100 french companies
                  </p>
                  <ul className="resume__item__tasks">
                    <li>Features development (js, vue, php, scss)</li>
                    <li>Follow-up meetings</li>
                    <li>Interim mission as CTO between october 2020 and january 2021</li>
                  </ul>
                </li>
                <li className="resume__item">
                  <div className="resume__item__header">
                    {'2017 > 2020'}
                    <span className="dot" />
                    Horizon
                    <span className="dot" />
                    Toulouse
                  </div>
                  <h3 className="resume__item__title">
                    CTO
                  </h3>
                  <p className="resume__item__sumup">
                    {'Managing the company\'s technical pole and ensuring production workflow'}
                  </p>
                  <ul className="resume__item__tasks">
                    <li>
                      Scheduling, production follow-up, recruiting, management and team upskill
                    </li>
                    <li>
                      Forecasting needs, R&D projects supervision,
                      IT infrastructuren development and publishing
                    </li>
                    <li>Customers management (teaching, products evolutions, litigations)</li>
                  </ul>
                </li>
                <li className="resume__item">
                  <div className="resume__item__header">
                    {'2015 > 2017'}
                    <span className="dot" />
                    Jalis
                    <span className="dot" />
                    Toulouse
                  </div>
                  <h3 className="resume__item__title">
                    Web project manager, UX designer, frontend developer
                  </h3>
                  <p className="resume__item__sumup">
                    Meeting clients, I had to draw up specifications and carry out projects
                  </p>
                  <ul className="resume__item__tasks">
                    <li>
                      Facilitating meetings for website specifications,
                      delivery and backoffice trainings
                    </li>
                    <li>
                      Project UX design, then frontend developments (html, scss, twig, jquery, git)
                    </li>
                  </ul>
                </li>
                <li className="resume__item">
                  <div className="resume__item__header">
                    {'2012 > 2015'}
                    <span className="dot" />
                    Jalis
                    <span className="dot" />
                    Marseille
                  </div>
                  <h3 className="resume__item__title">
                    UX design team manager
                  </h3>
                  <p className="resume__item__sumup">
                    In charge of the design production workflow,
                    team training and framework evolutions
                  </p>
                  <ul className="resume__item__tasks">
                    <li>
                      Frontend modules developments with jQuery
                    </li>
                    <li>
                      {'HTML/SCSS framework development, included into the company\'s CMS'}
                    </li>
                    <li>
                      Continuous upskill training for my team members (8), and close coaching
                    </li>
                    <li>
                      Collaborating with the backend team for developing a whole
                      new from scratch CMS
                    </li>
                  </ul>
                </li>
                <li className="resume__item">
                  <div className="resume__item__header">
                    {'2010 > 2012'}
                    <span className="dot" />
                    Jalis
                    <span className="dot" />
                    Marseille
                  </div>
                  <h3 className="resume__item__title">
                    UX designer, frontend developer
                  </h3>
                  <p className="resume__item__sumup">
                    B2c websites UX design and frontend development
                  </p>
                </li>
                <li className="resume__item">
                  <div className="resume__item__header">
                    {'2008 > 2010'}
                    <span className="dot" />
                    Freelance
                    <span className="dot" />
                    Marseille
                  </div>
                  <h3 className="resume__item__title">
                    Actionscript 3 developer (Flash)
                  </h3>
                  <p className="resume__item__sumup">
                    SEO friendly dynamic flash websites development
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div
            data-spe="--txt-center--padded"
            data-layout="grid"
            data-gap="--4"
          >
            <h4>stay in touch</h4>
            <div
              data-layout="--flex--mjustify-center"
              data-flex="--wrap"
              data-gap="--2--m4"
            >
              <a
                href="https://www.linkedin.com/in/pierre-bonnin-42989688/"
                target="_blank"
                data-bt="--primary"
                rel="noreferrer"
              >
                <span
                  className="icon"
                  data-spe="--linkedin"
                />
                LinkedIn
              </a>
              <a
                href="https://github.com/digivorefr"
                target="_blank"
                data-bt
                rel="noreferrer"
              >
                <span
                  className="icon"
                  data-spe="--github"
                />
                Github
              </a>
              <a
                href={resume}
                target="_blank"
                data-bt="--secondary"
                rel="noreferrer"
              >
                <span
                  className="icon"
                  data-spe="--download"
                />
                Resume (.pdf)
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="wrap"
        data-spe="--padded--dark"
      >
        <div
          className="container"
          data-layout="--grid"
          data-gap="--3"
          data-spe="--small--txt-center"
        >
          <p>❤️</p>
          <ul
            data-layout="--flex--justify-center"
            data-flex="--wrap"
            data-hgap="--3"
            data-vgap="--2"
          >
            <li>Belgium</li>
            <li>Canada</li>
            <li>Canary Islands</li>
            <li>Chile</li>
            <li>Costa Rica</li>
            <li>Croatia</li>
            <li>France</li>
            <li>Germany</li>
            <li>Italy</li>
            <li>Ireland</li>
            <li>Netherlands</li>
            <li>Spain</li>
            <li>Portugal</li>
            <li>Switzerland</li>
            <li>Tunisia</li>
            <li>United Kingdom</li>
            <li>United States</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
