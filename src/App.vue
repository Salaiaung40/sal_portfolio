<template>
  <div id="app">
    <div id="top">
      <Navbar />

      <!-- <div class="box2">
      <div class="namecontainer">
        <h1>Salai Tun Lin Aung</h1>
        <h5>Web Developer</h5>
      </div>
      
      <img class="banner" src="@/assets/banner2.jpg" alt="banner" />
    </div> -->

      <router-view />

      <div id="footer">
        <h5>salai © 2020 v1.0</h5>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
// import Contact2 from "@/components/test2.vue";
// import Tests from "@/components/tests.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  border: 0px;
  outline: 0px;
  box-sizing: border-box;
  font-size: 100%;
}
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* background: green; */
  color: #2c3e50;
  background-image: linear-gradient(
    to right,
    rgb(34, 31, 31),
    rgba(80, 76, 76, 0.356) /* rgba(255, 0, 0, 0) */
  ); /* Standard syntax (must be last) */
  z-index: -5;
}

#footer {
  padding: 30px;
  /* background-color: #141414 !important; */
  background-color: #343a40 !important;
  box-shadow: -3px 3px 10px rgb(3, 0, 0);
  right: 0;
  left: 0;
  padding: 0.5rem 1rem;
}

.box2,
.banner {
  margin-top: 190px;
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
  /* height: 30vw; */
  width: 100%;
  position: relative;
}
.banner {
  margin-top: -150px;
}
.namecontainer {
  background-color: white;
  width: 30%;
  height: auto;

  margin-top: 50px;
  /* margin-top: -190px; */
  margin-left: 80px;
  margin-bottom: 100px;
  z-index: +30;
  border-radius: 1em;
  /* box-shadow: rgb(253, 253, 253) 0 5px 0px 0; */

  font-size: 1.5em;
  font-weight: bold;
  font-family: sans-serif;
  word-spacing: 5px;
}
#footer {
  font-weight: bold;
  color: #d5dce4;
}
</style>
