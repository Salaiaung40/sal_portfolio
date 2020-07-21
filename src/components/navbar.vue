<template>
  <div id="nav">
    <label class="logo">
      <img src="@/assets/Imag/Salai-logo1.png" alt="logo" />
    </label>

    <input type="checkbox" id="check" />
    <label for="check" class="checkbtn">
      <i class="fa fa-bars"></i>
    </label>

    <ul class="menu">
      <!-- <router-link to="/">Home</router-link> | -->
      <scrollactive class="my-nav" :offset="200">
        <li>
          <a id="homed" href="#home" class="scrollactive-item">Home</a>
        </li>

        <li>
          <a id="aboutd" href="#about" class="scrollactive-item">About Me</a>
        </li>

        <li>
          <a id="workd" href="#work" class="scrollactive-item">My Projects</a>
        </li>

        <li>
          <a id="expd" href="#experience" class="scrollactive-item"
            >Experience</a
          >
        </li>

        <li>
          <a id="edud" href="#edu" class="scrollactive-item"
            >Education and Skills</a
          >
        </li>

        <li>
          <a id="contd" href="#contact" class="scrollactive-item">Contact Me</a>
        </li>
      </scrollactive>

      <!-- <router-link to="/about">About</router-link> -->
    </ul>
  </div>
</template>

<script>
// import navjs from "@/assets/nav.js";
export default {
  name: "Navbar",
};
</script>

<style scoped>
#nav {
  padding: 1vw;
  /* background-color: #141414 !important; */
  background-color: #343a40 !important;
  box-shadow: -3px 3px 10px rgb(3, 0, 0);
  right: 0;
  left: 0;
  padding: 1em 1em 0.5em 1em;
  position: fixed;
  top: 0;
  z-index: 2030;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
}
label.logo img {
  height: 3vw;
  width: 3vw;
  margin-left: 3vw;
  /* align-self: flex-start; */
}
.checkbtn {
  font-size: 4.5vw;
  width: 5vw;
  height: 5vw;
  color: black;
  /* color: white; */
  position: center;
  float: right;
  cursor: pointer;
  background: white;
  /* background: yellow; */
  display: none;
  border-radius: 0.2em;
}
/* .checkbtn i{
  color: black;
} */

#check {
  display: none;
}

#nav ul .my-nav {
  display: flex;
  list-style-type: none;
  transition: all 0.5s;
}

#nav li {
  padding: 0.5vw 1vw;
}

#nav a {
  font-weight: bold;
  font-size: 1em;
  color: #d5dce4;
  text-decoration: none;
  /* background: #141414; */
  background: #141414;
  border-radius: 1em;
  /* width: 1vw; */
  padding: 0.5vw 0.5vw;
  /* margin: 3em 0 ; */
}

#nav a:hover {
  background: #fff;
  /* background: yellow; */
  color: #141414;
}
.scrollactive-item {
  background-color: none;
}

.is-active {
  background-color: #fff !important;
  color: #141414 !important;
}

/* #nav a .router-link-exact-active {
  color: #5183e0;
} */

@media screen and (max-width: 858px) {
  #nav {
    padding: 1em 1em 0em 1em;
    justify-content: space-between;
  }

  .checkbtn {
    display: block;
    margin-right: 0px;
  }
  label.logo img {
    height: 7vw;
    width: 7vw;
    margin-left: 3vw;
  }

  ul {
    position: fixed;
    width: 85%;
    height: 5vh;
    background: #829db885;

    top: 80px;
    left: -100%;
    text-align: center;
    transition: all 0.5s;
    margin-left: 3em;
    border-radius: 0.3em;
  }
  #nav li {
    padding: 1.5vw 1vw;
    display: block;
  }

  #check:checked ~ ul {
    left: 0;
  }
}

@media screen and (max-width: 824px) {
  #nav ul,
  .my-nav {
    padding: 0vw 1vw;
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: auto;
    top: 12vw;
    margin-left: 1em;
    transition: all 333ms ease-in-out;
    /* background: none; */
  }
  li {
    width: 100%;
    margin: 0.5vw 0vw 0.5vw -3vw;
    background: #141414;
    border-radius: 0.5em;
  }
}
@media screen and (max-width: 400px) {
  #nav ul,
  .my-nav {
    padding: 0vw 0vw;
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: auto;
    top: 13vw;
    /* background: white; */
    transition: all 333ms ease-in-out;
  }
  #nav li {
    margin-left: -4vw;
    background: #141414;
  }
}
</style>
