<template>
  <div data-layout="--grid">
    <div
      class="wrap wrap--max-height--with-background"
      data-layout="--flex--justify-center--items-center"
    >
      <div class="image">
        <img
          :src="background"
          alt="Digivore background"
          width="100%"
        >
      </div>
      <h1>digivore</h1>
    </div>
    <div class="wrap wrap--padded">
      <div
        class="container"
        data-layout="--grid"
        data-gap="--6"
      >
        <div
          class="---txt-center"
          data-layout="--grid"
          data-gap="--2"
        >
          <h2>frontend senior developer</h2>
          <p>Team spirit - Autonomous - Demanding - Curious</p>
        </div>
        <div
          data-layout="--grid"
          data-cols="--2"
          data-gap="--6"
        >
          <div
            class="skills"
            data-layout="--flex--justify-center"
          >
            <ul
              data-layout="--grid"
              data-gap="--5"
            >
              <li
                data-layout="--grid"
                data-gap="--2"
              >
                <h3>Front-End Development</h3>
                <ul>
                  <li>React</li>
                  <li>Vuejs</li>
                  <li>GSAP</li>
                  <li>html</li>
                  <li>(s)css</li>
                  <li>SEO</li>
                </ul>
              </li>
              <li
                data-layout="--grid"
                data-gap="--2"
              >
                <h3>Back-End Development</h3>
                <ul>
                  <li>Node</li>
                  <li>MySQL</li>
                  <li>PHP</li>
                  <li>mongodb</li>
                </ul>
              </li>
              <li
                data-layout="--grid"
                data-gap="--2"
              >
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
              <li
                data-layout="--grid"
                data-gap="--2"
              >
                <h3>UX / UI design</h3>
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
            <ul
              class="resume"
              data-layout="--grid"
              data-gap="--6"
            >
              <li
                class="resume__item"
                data-layout="--grid"
                data-gap="--3"
              >
                <div class="resume__item__header">
                  2021 > 2022
                  <span class="dot" />
                  Kiv Finance
                  <span class="dot" />
                  Toulouse
                </div>
                <h3 class="resume__item__title">
                  Software engineer
                </h3>
                <p class="resume__item__sumup">
                  "Startup adventure" in a US company targeting the US insurance market
                </p>
                <ul
                  class="resume__item__tasks"
                  data-layout="--grid"
                  data-gap="--2"
                >
                  <li>B2b & b2c apps design and fullstack development (node, react, scss)</li>
                  <li>Ethereum & Polygon smart contract development + NFT minting</li>
                </ul>
              </li>
              <li
                class="resume__item"
                data-layout="--grid"
                data-gap="--3"
              >
                <div class="resume__item__header">
                  2017 > 2020
                  <span class="dot" />
                  Horizon
                  <span class="dot" />
                  Toulouse
                </div>
                <h3 class="resume__item__title">
                  CTO
                </h3>
                <p class="resume__item__sumup">
                  Managing the company's technical pole and ensuring production workflow
                </p>
                <ul
                  class="resume__item__tasks"
                  data-layout="--grid"
                  data-gap="--2"
                >
                  <li>Scheduling, production follow-up, recruiting, management and team upskill</li>
                  <li>
                    Forecasting needs, R&D projects supervision,
                    IT infrastructuren development and publishing
                  </li>
                  <li>Customers management (teaching, products evolutions, litigations)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import background from 'images/home.jpg';

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      background,
    };
  },
});

</script>
