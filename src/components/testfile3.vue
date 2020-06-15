<template>
  <div id="body">
  <div class="page">
  <div class="timeline">

    <div class="timeline__group">
      <span class="timeline__year">2008</span>
      <div class="timeline__box">
        <div class="timeline__date">
          <span class="timeline__day">2</span>
          <span class="timeline__month">Feb</span>
        </div>
        <div   id="righter" class="timeline__post">
          <!-- might change to timeline__right -->
          <div class="timeline__content">
            <p>Attends the Philadelphia Museum School of Industrial Art. Studies design with Alexey Brodovitch, art director at Harper's Bazaar, and works as his assistant.</p>
          </div>
        </div>
      </div>

      <div class="timeline__box">
        <div class="timeline__date">
          <span class="timeline__day">1</span>
          <span class="timeline__month">Sept</span>
        </div>
        <div  id="lefter" class="timeline__post">
          <!-- might change to timeline__right -->
          <div class="timeline__content">
            <p>Started from University of Pennsylvania. This is an important stage of my career. Here I worked in the local magazine. The experience greatly affected me</p>
          </div>
        </div>
      </div>

    </div>

    <div class="timeline__group">
      <span class="timeline__year">2014</span>
      <div class="timeline__box">
        
        <div class="timeline__date">
          <span class="timeline__day">14</span>
          <span class="timeline__month">Jul</span>
        </div>

        <div id="righter" class="timeline__post">
          <div class="timeline__content">
            <p>Travels to France, Italy, Spain, and Peru. After completing fashion editorial in Lima, prolongs stay to make portraits of local people in a daylight studio</p>
          </div>
        </div>

      </div>
    </div>


    <div class="timeline__group">
      <span class="timeline__year">2016</span>
      <div class="timeline__box">
        <div class="timeline__date">
          <span class="timeline__day">28</span>
          <span class="timeline__month">Aug</span>
        </div>
        <div id="lefter" class="timeline__post">
          <div class="timeline__content">
            <p>Upon moving to Brooklyn that summer, I began photographing weddings in Chicago</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>


<!-- <div class="linkedin">
  <div class="linkedin__container">
    <p class="linkedin__text">I'm looking for my fans which I'll give away everything I know. If you're interested then 👉 <a href="https://www.patreon.com/posts/introduction-to-34774556" class="linkedin__link" rel="noopener noreferrer" target="_blank">join to me on Patreon!</a></p>
  </div>
</div> -->


</div>
</template>

<script>
export default {

}
</script>

<style scoped>
body {
  background: pink !important
}

.timeline {
  --uiTimelineMainColor: var(--timelineMainColor, #222);
  --uiTimelineSecondaryColor: var(--timelineSecondaryColor, #fff);

  position: relative;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.timeline:before {
  content: "";
  width: 4px;
  height: 100%;
  /* background-color: var(--uiTimelineMainColor); */
  background-color: black;

  position: absolute;
  top: 00;
}

.timeline__group {
  position: relative;
}

.timeline__group:not(:first-of-type) {
  margin-top: 4rem;
}

.timeline__year {
  padding: .5rem 1.5rem;
  color: var(--uiTimelineSecondaryColor);
  /* background-color: var(--uiTimelineMainColor); */
  background-color: black;

  position: absolute;
  left: 46.5vw;
  top: 0;
}

.timeline__box {
  position: relative;
}

.timeline__box:not(:last-of-type) {
  margin-bottom: 30px;
}

.timeline__box:before {
  content: "";
  width: 10%;
  left: 46.5vw;

  height: 2px;
  background-color: var(--uiTimelineMainColor);

  position: absolute;
  left: 50vw;
  z-index: -1;
}

.timeline__date {
  min-width: 65px;
  position: absolute;
  left: 46.5vw;

  box-sizing: border-box;
  padding: .5rem 1.5rem;
  text-align: center;

  background-color: var(--uiTimelineMainColor);
  color: var(--uiTimelineSecondaryColor);
}

.timeline__day {
  font-size: 2rem;
  font-weight: 700;
  display: block;
}

.timeline__month {
  display: block;
  font-size: .8em;
  text-transform: uppercase;
}

.timeline__post {
  padding: 1.5rem 2rem;
  border-radius: 2px;
  border-left: 3px solid var(--uiTimelineMainColor);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 1px 2px 0 rgba(0, 0, 0, .24);
  background-color: var(--uiTimelineSecondaryColor);
}

@media screen and (min-width: 641px) {

  .timeline:before {
    left: 50vw;
  }

  .timeline__group {
    padding-top: 55px;
  }

  .timeline__box {
    width: 90vw;
    /* background: gray */
  }

  .timeline__box:before {
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .timeline__date {
    top: 50%;
    margin-top: -27px;
  }
}

@media screen and (max-width: 640px) {

  .timeline:before {
    left: 0;
  }

  .timeline__group {
    padding-top: 40px;
  }

  .timeline__box {
    padding-left: 20px;
    padding-top: 70px;
  }

  .timeline__box:before {
    top: 90px;
  }

  .timeline__date {
    top: 0;
  }
}

.timeline {
  --timelineMainColor: #4557bb;
  font-size: 16px;
}

#lefter {
  margin-right: 50vw;
  color: red;
}

#righter {
  margin-left: 55vw;
  color: cyan;
}

/*
=====
DEMO
=====
*/

@media (min-width: 768px) {

  html {
    font-size: 62.5%;
  }
}

@media (max-width: 767px) {

  html {
    font-size: 55%;
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif;
  font-size: 1.6rem;
  color: #222;

  background-color: #f0f0f0;
  margin: 0;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;

  display: -webkit-box;

  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}

p {
  margin-top: 0;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

p:last-child {
  margin-bottom: 0;
}

.page {
  max-width: 800px;
  padding: 10rem 5vw 3rem 5vw;


  -webkit-box-ordinal-group: 2;
  order: 1;
}

/*
=====
LinkedIn
=====
*/

.linkedin {
  background-color: #fff;
  text-align: center;
}

.linkedin__container {
  max-width: 1000px;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
}

.linkedin__text {
  margin-top: 0;
  margin-bottom: 0;
}

.linkedin__link {
  color: #ff5c5c;
}

</style>
