import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
  translate: PropTypes.func.isRequired,
};

/**
 * Home page.
 */
export default function Home(props: InferProps<typeof propTypes>): JSX.Element {
  const { translate } = props;

  return (
    <div data-layout="--grid">
      <div className="wrap wrap--fit-screen--with-background" data-layout="--flex--justify-center--items-center">
        <div className="image">
          <img src="static/images/home3.jpg" alt="Digivore background" width="100%" />
        </div>
        <h1>digivore</h1>
      </div>
      <div className="wrap wrap--padded---txt-center">
        <div className="container" data-layout="--grid" data-gap="--6">
          <div data-layout="--grid--items-center" data-cols="--2" data-gap="--4">
            <img src="static/images/portrait.jpg" alt="Pierre Bonnin" />
            <div data-layout="--grid" data-gap="--2">
              <h2>Fullstack Developer</h2>
              <p>Team spirit - Autonomous  - Demanding - Curious</p>
            </div>
          </div>
          <div data-layout="--grid" data-cols="--2" data-hgap="--4">
            <div className="skills" data-layout="--flex--justify-center">
              <ul data-layout="--grid" data-gap="--5">
                <li data-layout="--grid" data-gap="--2">
                  <h4>Front-End Development</h4>
                  <ul>
                    <li>React</li>
                    <li>Vuejs</li>
                    <li>GSAP</li>
                    <li>html</li>
                    <li>(s)css</li>
                    <li>SEO</li>
                  </ul>
                </li>
                <li data-layout="--grid" data-gap="--2">
                  <h4>Back-End Development</h4>
                  <ul>
                    <li>Node</li>
                    <li>MySQL</li>
                    <li>PHP</li>
                    <li>mongodb</li>
                  </ul>
                </li>
                <li data-layout="--grid" data-gap="--2">
                  <h4>Smart contracts Development</h4>
                  <ul>
                    <li>Solidity</li>
                    <li>Ganache</li>
                    <li>Truffle</li>
                    <li>ethers.js</li>
                    <li>web3.js</li>
                    <li>web3-react</li>
                  </ul>
                </li>
                <li data-layout="--grid" data-gap="--2">
                  <h4>UX / UI design</h4>
                  <ul>
                    <li>Mobile First design</li>
                    <li>User standards</li>
                    <li>Accessibility</li>
                    <li>Adobe Creative Cloud</li>
                    <li>Affinity suite</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <p>
                    {'2021 > 2022'}
                    <span className="dot" />
                    Kiv Finance
                    <span className="dot" />
                    Toulouse
                  </p>
                  <h4>Software engineer</h4>
                  <p className="sumup">"Startup adventure" in a US company targeting the US insurance market</p>
                  <ul>
                    <li>B2b & b2c apps design and fullstack development (node, react, scss)</li>
                    <li>Euthereum & Polygon smart contract development + NFT minting</li>
                  </ul>
                </li>
                <li>
                  <p>
                    {'2017 > 2020'}
                    <span className="dot" />
                    Horizon
                    <span className="dot" />
                    Toulouse
                  </p>
                  <h4>CTO</h4>
                  <p className="sumup">Managing the company's technical pole and ensuring production workflow</p>
                  <ul>
                    <li>Scheduling, production follow-up, recruiting, management and team upskill</li>
                    <li>Forecasting needs, R&D projects supervision, IT infrastructuren development and publishing</li>
                    <li>Customers management (teaching, products evolutions, litigations)</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

Home.propTypes = propTypes;
Home.defaultProps = {};
Home.displayName = 'Home';
