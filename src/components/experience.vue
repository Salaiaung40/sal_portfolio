<template>
  <div id="experience">
    <h1>Experiences</h1>

    <div class="container">
      <div class="timeline-block timeline-block-right">
        <div class="marker"></div>
        <div class="timeline-content">
          <h3>2020</h3>
          <span>Intec Brussels</span>
          <p>Full-time intense training of HTML, CSS, Javascript and modern applications for Front-End Developing using popular Javascript frameworks such as VUE and React. For the Back-End Restful API's, MySql, php and Firestore.</p>
        </div>
      </div>

      <div class="timeline-block timeline-block-left">
        <div class="marker"></div>
        <div class="timeline-content">
          <h3></h3>
          <span>Vrije Universiteit Brussel</span>
          <p>Studying MSc. in Managemet at VUB, Brussels</p>
        </div>
      </div>

      <div class="timeline-block timeline-block-right">
        <div class="marker"></div>
        <div class="timeline-content">
          <h3>2011 -2013</h3>
          <span>Manager (Co-founder)</span>
          <br />
          <span>
            <h5>Migrant Education (CBO)</h5>
          </span>
          <span>
            <h6>
              <i class="fa fa-map-marker"></i> MaeSot, Tak, Thailand
            </h6>
          </span>
          <p>Managed 21 basic education learning centers’ running cost. Implement education projects with local authorities and community needs. M&E, Fundraising, Liaison with donors, local authorities and partners.</p>
        </div>
      </div>

      <div class="timeline-block timeline-block-left">
        <div class="marker"></div>
        <div class="timeline-content">
          <h3>2010 - 2012</h3>
          <span>Computer Trainer</span>
          <br />
          <span>
            <h5>World Education (Thailand)</h5>
          </span>
          <span>
            <h6>
              <i class="fa fa-map-marker"></i> MaeSot, Tak, Thailand
            </h6>
          </span>
          <p>Teach 8 hours a week to 24 students at WIDE HORIZONS community development program. Computer oftware programs taught were MS word, excel, PowerPoint, Adobe photoshop, InDesign, Corel Video Studio and Dreamweaver.</p>
        </div>
      </div>

      <div class="timeline-block timeline-block-right">
        <div class="marker"></div>
        <div class="timeline-content">
          <h3>2008 - 2013</h3>
          <span>Program Manager of Wide Horizons</span>
          <br />
          <span>
            <h5>World Education (Thailand)</h5>
          </span>
          <span>
            <h6>
              <i class="fa fa-map-marker"></i> MaeSot, Tak, Thailand
            </h6>
          </span>
          <p>Each year recruit 24 candidates from local CBOs to trained 2 years intensive course, in-class learning and year 2 practice for community development. Manage overall project, implement to reach target goals, Liaison with donors, local authorities, partner organizations and target populations. Report to donors and partner organizations in quarterly and annually, M&E projects and implements new project.</p>
        </div>
      </div>

      <div class="timeline-block timeline-block-left">
        <div class="marker"></div>
        <div class="timeline-content">
          <h3>1999 - 2005</h3>
          <span>Rural area development</span>
          <br />
          <span>
            <h6>
              <i class="fa fa-map-marker"></i> KongZu-project, Chin State, Myanmar
            </h6>
          </span>
          <p>Volunteering for rural area development project on developed school, farming projects and hydropower electricity project.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#experience {
  margin-top: 2em;
  margin: 0;
  padding: 30px 0;
  font-family: arial, sans-serif;
  background: #909090;
}

h1 {
  font-family: arial, sans-serif;
  /* text-shadow: 3px 4px 2px #010203; */
  padding-top: 0.4em;
  /* padding: 30px 0 0 0; */
  font-size: 4em;
  color: #fff;
  text-transform: uppercase;
  font-weight: 100;
}

span h5 {
  line-height: 1.8em;
  word-spacing: 1px;
  font-weight: 600;
  font-size: 18px;
}
span h6 {
  line-height: 1.8em;
  word-spacing: 1px;
  font-weight: 600;
  font-size: 16px;
}
span i {
  color: yellow;
  /* color: #464646; */
  font-size: 18px;
}
.container {
  width: 90%;
  padding: 50px 0;
  margin: 50px auto;
  position: relative;
  overflow: hidden;
}

.container:before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -1px;
  width: 2px;
  height: 100%;
  /* background: #141414; */
  background: #ccd1d9;
  z-index: 3;
}

.timeline-block {
  width: -webkit-calc(50% + 8px);
  width: -moz-calc(50% + 8px);
  width: calc(50% + 8px);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  justify-content: space-between;
  clear: both;
}

.timeline-block-right {
  float: right;
  color: black;
}
.timeline-block-right p {
  font-weight: bold;
}

.timeline-block-left {
  float: left;
  color: white;
  font-weight: 600;
  direction: rtl;
}

.marker {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #f5f7fa;
  background: #141414;
  margin-top: 10px;
  z-index: 20;
}

.timeline-content {
  width: 95%;
  padding: 0 25px;
}

.timeline-content h3 {
  line-height: 1.8em;
  word-spacing: 1px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 25px;
  font-weight: 600;
  text-align: start;
  color: #010203;
}

.timeline-content span {
  line-height: 1.8em;
  word-spacing: 1px;
  font-size: 20px;
  /* color: #100c07; */
  /* color: #a4a4a4; */
}

.timeline-content p {
  font-size: 16px;
  line-height: 1.8em;
  word-spacing: 1px;
}

@media screen and (max-width: 768px) {
  .container:before {
    left: 38px;
    width: 2px;
  }
  .timeline-block {
    width: 100%;
    margin-bottom: 30px;
  }
  .timeline-content {
    padding-left: 65px;
  }
  .marker {
    margin-left: 30px;
  }
  .timeline-block-right {
    float: none;
    font-weight: bold;
  }
  p {
    text-align: left;
  }

  .timeline-block-left {
    float: none;
    color: #010203;
    font-weight: bold;
    direction: ltr;
  }

  h1 {
    font-size: 3em;
    /* text-shadow: 4px 5px 1px #010203; */
  }
}
</style>

