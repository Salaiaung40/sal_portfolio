<template>
  <div class="container-skills">
    <h1>Programming Language Skills</h1>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
      
      <div class="html">
        <p class="bar-title">
           HTML / HTML5
          <span class="percent align-right">90%</span>
        </p>
        <div class="bar">
          <div class="bar-fill bar-fill-html start"></div>
        </div>
      </div>

      <div class="css">
        <p class="bar-title">
          CSS3/SCSS, Responsive Design
          <span class="percent align-right">80%</span>
        </p>
        <div class="bar">
          <div class="bar-fill bar-fill-css start"></div>
        </div>
      </div>

      <div class="javascript">
        <p class="bar-title">
          Javascript
          <span class="percent align-right">60%</span>
        </p>
        <div class="bar">
          <div class="bar-fill bar-fill-javascript start"></div>
        </div>
      </div>

      <div class="jquery">
        <p class="bar-title">
          Firestore, MySQl
          <span class="percent align-right">70%</span>
        </p>
        <div class="bar">
          <div class="bar-fill bar-fill-jquery start"></div>
        </div>
      </div>

      <div class="responsive-design">
        <p class="bar-title">
          FrameWorks: VUE.js, REACT.js
          <span class="percent align-right">70%</span>
        </p>
        <div class="bar">
          <div class="bar-fill bar-fill-responsive start"></div>
        </div>
      </div>

      <div class="photoshop">
        <p class="bar-title">
          Photoshop
          <span class="percent align-right">50%</span>
        </p>
        <div class="bar">
        <div class="bar-fill bar-fill-photoshop start"></div>
        </div>
      </div>

    </div> <!-- end of container-skills -->
</template>

<script>
export default {

}
</script>

<style scoped>
.container-skills {
	margin: 0em auto 0 3.35em;
  max-width: 85%;
  text-transform: uppercase;
	font-family: arial, sans-serif;	
	font-size: 18px;
	color: #010203;
}
 h1{
  text-transform: uppercase;
  font-family:  sans-serif;
  /* text-shadow: 3px 4px 2px whitesmoke; */
  font-size: 1.4em;
  letter-spacing: 0.1em;
  font-weight: 600;
  margin-bottom: 0.4em;
  /* color: white; */
  
}
.bar {
  position: relative;
	background-color: #d8d8d8;
  
	height: 20px;
	margin: 0 0 20px 0;
}
.bar-fill {
  position: absolute;
  height: 20px;
}
.bar-title {
  position: relative;
	font-size: 1em;
	text-align: left;
	margin: 0 0 5px 0;
}
.percent {
  position: absolute;
	right: 0;
}

/* Animations Below - Replace ease-out with infinite for infinite loop*/
/*Edit here for html*/  
.bar-fill-html {
	width: 90%;
  background-color: #F16529;
	animation: bar-fill-html 2s ease-out;
	-moz-animation: bar-fill-html 2s ease-out;
  -webkit-animation: bar-fill-html 2s ease-out;
}
@keyframes bar-fill-html {
    0% {
        width: 0px;
    }

    100% {
        width: 90%;
    }
}
@-moz-keyframes bar-fill-html {
    0% {
        width: 0px;
    }

    100% {
        width: 90%;
    }
}
@-webkit-keyframes bar-fill-html {
    0% {
        width: 0px;
    }

    100% {
        width: 90%;
    }
}

/*Edit here for CSS*/

.bar-fill-css {
	width: 80%;
  background-color: #264de4;
	animation: bar-fill-css 2s ease-out;
	-moz-animation: bar-fill-css 2s ease-out;
  -webkit-animation: bar-fill-css 2s ease-out;
}
@keyframes bar-fill-css {
    0% {
        width: 0px;
    }

    100% {
        width: 80%;
    }
}
@-moz-keyframes bar-fill-css {
    0% {
        width: 0px;
    }

    100% {
        width: 80%;
    }
}
@-webkit-keyframes bar-fill-css {
    0% {
        width: 0px;
    }

    100% {
        width: 80%;
    }
}

/*Edit here for Javascript*/
.bar-fill-javascript {
	width: 60%;
  background-color: #f0db4f;
  animation: bar-fill-javascript 2s ease-out;
	-moz-animation: bar-fill-javascript 2s ease-out;
  -webkit-animation: bar-fill-javascript 2s ease-out;
}
@keyframes bar-fill-javascript {
    0% {
        width: 0px;
    }

    100% {
        width: 60%;
    }
}
@-moz-keyframes bar-fill-javascript {
    0% {
        width: 0px;
    }

    100% {
        width: 60%;
    }
}
@-webkit-keyframes bar-fill-javascript {
    0% {
        width: 0px;
    }

    100% {
        width: 60%;
    }
}
/*Edit here for Jquery*/
.bar-fill-jquery{
	width: 75%;
  background-color: #131b28;
  animation: bar-fill-jquery 2s ease-out;
	-moz-animation: bar-fill-jquery 2s ease-out;
  -webkit-animation: bar-fill-jquery 2s ease-out;
}
@keyframes bar-fill-jquery {
    0% {
        width: 0px;
    }

    100% {
        width: 70%;
    }
}
@-moz-keyframes bar-fill-jquery {
    0% {
        width: 0px;
    }

    100% {
        width: 70%;
    }
}
@-webkit-keyframes bar-fill-jquery {
    0% {
        width: 0px;
    }

    100% {
        width: 70%;
    }
}
/*Edit here for Responsive*/
.bar-fill-responsive{
	width: 70%;
  background-color: #429f46;
  animation: bar-fill-responsive 2s ease-out;
	-moz-animation: bar-fill-responsive 2s ease-out;
  -webkit-animation: bar-fill-responsive 2s ease-out;
}
@keyframes bar-fill-responsive {
    0% {
        width: 0px;
    }

    100% {
        width: 90%;
    }
}
@-moz-keyframes bar-fill-responsive {
    0% {
        width: 0px;
    }

    100% {
        width: 90%;
    }
}
@-webkit-keyframes bar-fill-responsive {
    0% {
        width: 0px;
    }

    100% {
        width: 90%;
    }
}
/*Edit here for Photoshop*/
.bar-fill-photoshop{
	width: 50%;
  background-color: #0a73dc;
  animation: bar-fill-photoshop 2s ease-out;
	-moz-animation: bar-fill-photoshop 2s ease-out;
  -webkit-animation: bar-fill-photoshop 2s ease-out;
}
@keyframes bar-fill-photoshop {
    0% {
        width: 0px;
    }

    100% {
        width: 20%;
    }
}
@-moz-keyframes bar-fill-photoshop {
    0% {
        width: 0px;
    }

    100% {
        width: 20%;
    }
}
@-webkit-keyframes bar-fill-photoshop {
    0% {
        width: 0px;
    }

    100% {
        width: 20%;
    }
}
@media screen and (max-width: 880px) {

h1 {
  color: white;
  /* text-shadow: none; */
  text-shadow: 3px 4px 2px #010203;
}
.percent {
  color: black;
}
.bar-title  {
  color: white;
  text-transform: none;
}



}


</style>