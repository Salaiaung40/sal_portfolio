<template>
  <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <a href="#home">Home</a> | <a href="#about">About Me</a> |
      <a href="#work">My Projects</a> | <a href="#experience">Experience</a> |<a
        href="#edu"
        >Education and Skills</a
      >
      | <a href="#contact">Contact Me</a>
      > |
      <!-- <router-link to="/about">About</router-link> -->
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>


#nav {
 
  padding: 1vw;
  /* background-color: #141414 !important; */
  background-color: #343a40 !important;
  box-shadow: -3px 3px 10px rgb(3, 0, 0);
  right: 0;
  left: 0;
  padding: 1em 1em;
  position: fixed;
  top: 0;
  z-index: 1030;
  text-align: center;
  }

#nav a {
  font-weight: bold;
  font-size: 1em;
  color: #d5dce4;
  text-decoration: none;
  background: #141414;
  border-radius: 1em;
  /* width: 1vw; */
  padding: 0.5vw 0.5vw;
}

/* #nav a .router-link-exact-active {
  color: #5183e0;
} */


/* @media screen and (max-width: 900px) {

#nav {
  padding: 1em 1em 0em 1em;
  
  

}

} */

</style>