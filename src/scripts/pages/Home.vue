<template>
  <div data-layout="--grid">
    <Hero
      :background="background"
      :animate="initialScrollTop === 0"
    />
    <div
      class="wrap"
      data-spe="--padded"
    >
      <div
        class="container"
        data-spe="--small"
        data-layout="--grid"
        data-cols="--s2"
        data-gap="--2--s3"
      >
        <div class="tile tile--primary">
          Sass is my mummy,<br>React & Vue are both family.
        </div>
        <div class="tile tile--secondary">
          Remote-friendly,<br>@Toulouse, France.
        </div>
        <div
          class="tile"
          data-col="--s2"
          data-spe="--txt-center"
        >
          I'm currently looking for new opportunities
        </div>
      </div>
    </div>
    <div
      class="wrap"
      data-spe="--padded"
    >
      <div
        class="container"
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
          <div class="skills">
            <ul>
              <li>
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
              class="resume"
              data-spe="--txt-center--mtxt-left"
            >
              <li class="resume__item">
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
                <ul class="resume__item__tasks">
                  <li>B2b & b2c apps design and fullstack development (node, react, scss)</li>
                  <li>Ethereum & Polygon smart contract development + NFT minting</li>
                </ul>
              </li>
              <li class="resume__item">
                <div class="resume__item__header">
                  2020 > 2021
                  <span class="dot" />
                  Inbenta
                  <span class="dot" />
                  Toulouse
                </div>
                <h3 class="resume__item__title">
                  Fullstack developer
                </h3>
                <p class="resume__item__sumup">
                  Selfcare products development (chatbots, faq...) for top 100 french companies
                </p>
                <ul class="resume__item__tasks">
                  <li>Features development (js, vue, php, scss)</li>
                  <li>Follow-up meetings</li>
                  <li>Interim mission as CTO between october 2020 and january 2021</li>
                </ul>
              </li>
              <li class="resume__item">
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
                <ul class="resume__item__tasks">
                  <li>Scheduling, production follow-up, recruiting, management and team upskill</li>
                  <li>
                    Forecasting needs, R&D projects supervision,
                    IT infrastructuren development and publishing
                  </li>
                  <li>Customers management (teaching, products evolutions, litigations)</li>
                </ul>
              </li>
              <li class="resume__item">
                <div class="resume__item__header">
                  2015 > 2017
                  <span class="dot" />
                  Jalis
                  <span class="dot" />
                  Toulouse
                </div>
                <h3 class="resume__item__title">
                  Web project manager, UX designer, frontend developer
                </h3>
                <p class="resume__item__sumup">
                  Meeting clients, I had to draw up specifications and carry out projects
                </p>
                <ul class="resume__item__tasks">
                  <li>
                    Facilitating meetings for website specifications,
                    delivery and backoffice trainings
                  </li>
                  <li>
                    Project UX design, then frontend developments (html, scss, twig, jquery, git)
                  </li>
                </ul>
              </li>
              <li class="resume__item">
                <div class="resume__item__header">
                  2012 > 2015
                  <span class="dot" />
                  Jalis
                  <span class="dot" />
                  Marseille
                </div>
                <h3 class="resume__item__title">
                  UX design team manager
                </h3>
                <p class="resume__item__sumup">
                  In charge of the design production workflow,
                  team training and framework evolutions
                </p>
                <ul class="resume__item__tasks">
                  <li>
                    Frontend modules developments with jQuery
                  </li>
                  <li>
                    HTML/SCSS framework development, included into the company's CMS
                  </li>
                  <li>
                    Continuous upskill training for my team members (8), and close coaching
                  </li>
                  <li>
                    Collaborating with the backend team for developing a whole new from scratch CMS
                  </li>
                </ul>
              </li>
              <li class="resume__item">
                <div class="resume__item__header">
                  2010 > 2012
                  <span class="dot" />
                  Jalis
                  <span class="dot" />
                  Marseille
                </div>
                <h3 class="resume__item__title">
                  UX designer, frontend developer
                </h3>
                <p class="resume__item__sumup">
                  B2c websites UX design and frontend development
                </p>
              </li>
              <li class="resume__item">
                <div class="resume__item__header">
                  2008 > 2010
                  <span class="dot" />
                  Freelance
                  <span class="dot" />
                  Marseille
                </div>
                <h3 class="resume__item__title">
                  Actionscript 3 developer (Flash)
                </h3>
                <p class="resume__item__sumup">
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
            >
              <span
                class="icon"
                data-spe="--linkedin"
              />
              LinkedIn
            </a>
            <a
              href="https://github.com/digivorefr"
              target="_blank"
              data-bt
            >
              <span
                class="icon"
                data-spe="--github"
              />
              Github
            </a>
            <a
              :href="resume"
              target="_blank"
              data-bt="--secondary"
            >
              <span
                class="icon"
                data-spe="--download"
              />
              Resume (.pdf)
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="wrap"
      data-spe="--padded--dark"
    >
      <div
        class="container"
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
</template>

<script lang="ts">
import Vue from 'vue';
import background from 'images/home.jpg';
import resume from 'documents/cv-pierre-bonnin-en.pdf';
import Hero from 'scripts/components/Hero.vue';

export default Vue.extend({
  name: 'Home',
  components: { Hero },
  data() {
    return {
      background,
      resume,
      initialScrollTop: 0,
    };
  },
  mounted() {
    this.initialScrollTop = window.scrollY;
  },
});

</script>
