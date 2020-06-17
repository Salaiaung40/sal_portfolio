<template>
<div>
          <scrollactive
            ref="scrollactive"
            class="my-nav"
            v-on:itemchanged="onItemChanged"
          >
            <!-- <router-link to="/">Home</router-link> | -->
            <a href="#home" class="scrollactive-item">Home</a> |
            <a href="#about" class="scrollactive-item">About Me</a> |
            <a href="#work" class="scrollactive-item">My Projects</a> |
            <a href="#experience" class="scrollactive-item">Experience</a> |
            <a href="#edu" class="scrollactive-item">Education and Skills</a>|
            <a href="#contact" class="scrollactive-item">Contact Me</a> |
            <!-- <router-link to="/about">About</router-link> -->
          </scrollactive>






  <div class="wrapper">
  <form action="#" method="post">

      <div class="field">
        <input type="text" id="name" name="name" placeholder="Who are you?" autofocus/>
        <label for="name">Name</label>
      </div>

      <div class="field">
        <input type="text" id="email" name="email" placeholder="name@domain.tld" />
        <label for="email">E-Mail</label>
      </div>

      <div class="field">
        <textarea id="msg" rows="4" name="msg" placeholder="You message..."></textarea>
        <label for="msg">Nachricht</label>
      </div>

    <input class="button" type="submit" value="Send" />
  </form>

</div>
</div>

</template>

<script>
export default {
  // methods: {
  //   data() {
  //     <scrollactive
  //       active-class='active'
  //       offset='80'
  //       duration='800'
  //       bezier-easing-value='.5,0,.35,1'
  //       background='white'
  //     ></scrollactive>;
  //   },
  //   onItemChanged(event, currentItem, lastActiveItem) {
  //     // here you have access to everything you need regarding that event
  //     this.$refs.scrollactive.setScrollactiveItems();
  //   },
  // },

}
</script>

<style scoped>
/* * {
  box-sizing: border-box;
  color: #fff;
  font-family: Segoe, "Segoe UI", "DejaVu Sans", "Trebuchet MS", Verdana,
    "sans-serif";
} */

/* html,
body {
  background: #0e101f;
  margin: 0;
  padding: 0;
} */

*:focus {
  outline: 0;
}

/* .wrapper {
  margin: 100px auto 0;
  width: 70%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
} */

/* form {
  width: 100%;
  margin: 0;
} */

/* form * {
  font-size: 20px;
  letter-spacing: 0.075em;
  font-weight: 300;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
} */

/* form .field {
  width: 100%;
  position: relative;
  margin-bottom: 15px;
} */

/* form .field label {
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(90deg, #b13e8b, #372056);
  width: 100%;
  height: 64px;
  transition: width 333ms ease-in-out;
  text-align: center;
  padding: 18px 0;
} */

/* form .field input[type="text"],
form .field textarea {
  border: none;
  width: 100%;
  height: 64px;
  margin: 0;
  padding-left: 19.5%;
  color: #313a3d;
} */

/* form #msg {
  height: 64px;
  resize: none;
  transition: all 333ms ease-in-out;
  padding-top: 18px;
} */
/* form textarea:focus#msg,
form textarea:not(:placeholder-shown)#msg {
  height: 166px;
}
form input[type="text"]:focus + label,
form input[type="text"]:not(:placeholder-shown) + label,
form textarea:focus + label,
form textarea:not(:placeholder-shown) + label,
form .field:hover label {
  width: 18%;
} */
/* form input[type="submit"] {
  background: linear-gradient(90deg, #b13e8b, #812d65);
  -webkit-appearance: none;
  border: none;
  position: relative;
  padding: 13px 50px;
  transition: all 0.3s ease-in-out;
} */

/* form input[type="submit"]:hover,
form input[type="submit"]:focus {
  background: #372056;  
} */

</style>
