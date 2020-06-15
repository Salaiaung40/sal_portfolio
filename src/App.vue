<template>
  <div id="app">
    <Navbar />
    <router-view />
    <div id="footer">
      <h5>salai © 2020 v1.0</h5>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";

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
  /* z-index: -5; */
}

#footer {
  font-weight: bold;
  color: #d5dce4;
  padding: 30px;
  /* background-color: #141414 !important; */
  background-color: #343a40 !important;
  box-shadow: -3px 3px 10px rgb(3, 0, 0);
  right: 0;
  left: 0;
  padding: 0.5rem 1rem;
}
</style>
