<template>
<div id="edu">
    <div class="univ">
      <h1>Education</h1>
      
      <div class="item">
        <div class="image">
          <div>
            <img src="@/assets/Imag/intec-logo.png" />
            <span>
            2020
            </span>
          </div>
        </div>

        <div class="details">
          <div>
            <h2>INTEC Brussels</h2>
              <p>Full-time intense course of HTML, CSS, Javascript and modern applications for Front-End Developing using also such popular Javascript frameworks as VUE and React. </p>
          </div>
        </div>
      </div>

      <div class="item">
        <div class="image">
          <div>
            <img src="@/assets/Imag/vubsquare.png" />
            <span>
            2020
            </span>
          </div>
        </div>
        <div class="details">
          <div>
            <h2>Vrije Universiteit Brussel</h2>
            <p>Studying MSc. in Managemet at VUB, Brussels </p>
          </div>
        </div>
      </div>

      <div class="item">
        <div class="image">
          <div>
            <img src="@/assets/Imag/Aculogo.png" />
            <span>
            2010 - 2012
            </span>
          </div>
        </div>
        <div class="details">
          <div>
            <h2>Australian Catholic University</h2>
            <p>Diploma in Liberal Study </p>
          </div>
        </div>
      </div> 

      <div class="item">
        <div class="image">
          <div>
            <img src="@/assets/Imag/dagon.png" />
            <span>
            2000 - 2003
            </span>
          </div>
        </div>
        <div class="details">
          <div>
            <h2>Dagon University</h2> 
            <p> Yangon, Myanmar </p>
            <p>Bachelor of   History </p>
          </div>
        </div>
      </div> 

<Training/>

  </div> <!-- end of univ -->

  <div class="skils">
    <Programming />
    

<div class="language">
  <h1>Languages</h1>
  <Languages />
</div> <!-- end of languages -->

  </div><!-- end of skils -->

  </div> <!-- end of edu -->
</template>

<script>
import Training from "@/components/cards/training.vue";
import Languages from "@/components/cards/languages.vue";
import Programming from "@/components/cards/programming.vue";


export default {
  name: "Edu",
  components: {
    Training,
    Languages,
    Programming,

}
}
</script>

<style scoped>
#edu{
  display: flex;
  /* flex-direction: row; */
   /* flex-wrap: wrap; */
}

.univ{
	color: white;
	font-family: arial, sans-serif;
  width: 50%;
}
.univ h1 {
  text-transform: uppercase;
  font-family:  sans-serif;
  text-shadow: 3px 4px 2px #010203;
  font-size: 1.4em;
  letter-spacing: 0.1em;
  font-weight: 600;
    /* position: center; */
}
 .item {
	display: flex;
	max-width: 98%;
	margin: 0 auto;
}
.item .image {
	padding: 1em 2em;
  position: relative;
	text-align: center;
	font-size: 0.8em;
  z-index: 2;
}
.item .image::before {
	content: '';
  position: absolute;
  top: 0;
	left: 5.4em;
	/* left: -4.5em; */
  height: 100%;
	border-left: 2px solid White;
	/* border-left: 1px solid #232b50; */
		z-index: -1;
}
 

  /* .item .image:after {
	content: '';
	width: 100%;
	height: 0;
	
	border-bottom: 1px solid #232b50; 
	position: absolute;
	top: 2.75em;
	left: 2.5em;
	z-index: 0; 
}  */
 .item .image img {
	border-radius: 50%;
	height: 5em;
	border: 0.35em solid white;
}
 .item .image span {
	display: block;
	clear: both;
	padding: 0.25em 0;
	margin: 0.5em 0;
  border-radius: 1em;
  width: 7em;
  color: black;
  font-weight: bold;
	background: white;
}
 .item .details {
	position: relative;
	flex-grow: 1;
	border: 1px solid Yellow;
	/* border: 1px solid #232b50; */
	border-radius: 0.5em;
	padding: 1.5em;
	margin: 1em 0;
}
 .item .details h2 {
   text-transform: uppercase;
	/* color: greenyellow; */
  /* color: white; */
  /* text-shadow: 2px 3px 2px #010203; */
  text-shadow: none ;
	font-size: 1.3em;
	margin: 0;
	padding: 0 0 0.5em 0;
	letter-spacing: 0.1em;
}
 .item .details p {
	margin: 0;
	padding: 0;
  line-height: 150%;
}

 
 




.skils{
font-size: 12px;
  font-family: 'Roboto', sans-serif;
  width: 50%;
}

.language{
  margin: 3em 0 0 2em;
  padding: 1em;
  text-align: left;
  font-size: 20px;
  font-weight: 500;
}
.language h1 {
  text-align: center;
  color: black;
  font-weight: 1000;
  margin: 20px;
}

@media screen and (max-width: 880px) {
 #edu{
   display: block;
   }
   .univ, 
   .skils {
    width: 100%;
    }
  .univ{
       color:#010203; 
       font-weight: bold
    
     }
     .univ h1{
color:white
     }
  .skils{
       margin-top: 3em;
       
     }
    
}

@media screen and (max-width: 500px) {

.univ{
margin: 0;
/* background: darkorange; */

}

.item .image{
  padding: 0;
 /* background: blueviolet; */
}
.item .image::before {
 left: 3.4em;
}
}

</style> 