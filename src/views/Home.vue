<template>
  <div id="home">
    <img class="banner" src="@/assets/Imag/banner14.png" alt="banner" />
    <!-- <img class="banner" src="@/assets/banner2.jpg" alt="banner" /> -->

    <!-- <s> <h1>download link color chage to blue</h1> </s>
    <s> <h1>projects effect need to fix  </h1> </s> 
    <s> <h1>contact form need to link with e-mail</h1> </s>
    <s><h1>add download buton for recomendation below the picture</h1> </S>
    <s><h1>remove underline form menu</h1> </S>
    <s><h1>add training section</h1></s>
    <s><h1>Re-write the about me paragraph</h1></s>
    <s> <h1>all font, size, color and effect are same</h1> </s>
    <s><h1>make a logo with banner</h1></s>
    <s><h1>Add picture</h1></s>
    <s><h1>fix the slide cover effet after type at Contact Me</h1></s>

    <h1>All color should be consistance</h1>    
    <h1>create Nav bar</h1>
    <h1>links onepage highlight</h1>
     -->

    <Aboutme />
    <Projects />
    <Experience />
    <Education />
    <Contact />
  </div>
</template>

<script>
import Aboutme from "@/components/about.vue";
import Projects from "@/components/projects.vue";
import Experience from "@/components/experience.vue";
import Education from "@/components/edu.vue";
import Contact from "@/components/contact.vue";

export default {
  name: "Home",
  components: {
    Aboutme,
    Projects,
    Experience,
    Education,
    Contact,
  },
};
</script>

<style scoped>
#home {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  box-sizing: border-box;
  /* background: blue; */
}
.banner {
  margin-top: 60px;
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
  /* height: 30vw; */
  width: 100%;
  position: relative;
  /* background: red; */
}
</style>
