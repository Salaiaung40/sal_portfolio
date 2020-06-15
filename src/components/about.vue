<template>
  <div id="about">
    <h1>About Me</h1>
    <div class="butgroup">
      <p class="middle">Click here to Download My CV</p>

      <a href="'@/assets/business_card.jpg' 'banner2.png'" download>
        <button>English</button>
      </a>
      <a href="'@/assets/business_card.jpg' 'banner2.png'" download>
        <button>Dutch</button>
      </a>
    </div>

    <div class="container1">
      <div class="aboutme">
        <h2>Why I am a webdeveloper</h2>

        <p>
          I always passionate and wanted to work at IT sector. Thus, I did
          self-taught some multimedia programs in the past. As a result, not
          only improve my knowledge but also later I was able to teach to youth
          from community. Now opportunity has given by INTEC to pursuit my
          passionate career in front-end development sector. Ways to improvement
          are continues learning and take new challenges constantly.
        </p>
      </div>
      <!--end of aboutme -->

      <div class="contact">
        <ul>
          <li>
            <div class="icons"><i class="fa fa-map-marker"></i></div>
            <div class="contact-name"><p>Location</p></div>
            <div class="contact-info"><p>Brussels</p></div>
          </li>

          <li>
            <div class="icons"><i class="fa fa-at"></i></div>
            <div class="contact-name"><p>E-mail</p></div>
            <div class="contact-info">
              <p>
                <a href="mailto:salaihtunlin@gmail.com">
                  salaihtunlin@gmail.com</a
                >
              </p>
            </div>
          </li>

          <li>
            <div class="icons"><i class="fa fa-mobile-phone"></i></div>
            <div class="contact-name"><p>GSM</p></div>
            <div class="contact-info"><p>+32 465 483 454</p></div>
          </li>
        </ul>

        <div class="map">
          <!-- <h4>My First Google Map</h4> -->

          <!-- <div id="googleMap" style="width:100%;height:400px;"> -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1781.4250032914917!2d4.404253839309177!3d50.843843475852175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c4aafba87e21%3A0xbf6618b60ececf66!2sGeorges%20Henri!5e0!3m2!1sen!2sbe!4v1591777264649!5m2!1sen!2sbe"
            width="100%"
            height="100%"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <!-- </div> -->
        </div>
      </div>
      <!--end of contact -->
    </div>
    <!--end of container1 -->
  </div>
  <!--end of about -->
</template>

<script>
export default {
  name: "About",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
#about {
  /* margin-top: 2em; */
  font-family: Arial, sans-serif;
  width: 100%;
  /* background: navy; */
  /* font-size: 62.5%;
  font-family:  sans-serif;
  font-weight: 300;
  color: #b6b6b6; */
}
h1 {
  padding: 30px 0 0 0;
  font-size: 4em;
  color: #fff;
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: 100;
  /* text-shadow: 3px 4px 2px #010203; */
}
h2 {
  color: white;
  text-align: left;
  padding-left: 1em;
}
.butgroup {
  width: 100vw;
  /* width: 350px; */
  /* width: 22%; */
  /* height: 50px; */
  color: #010203;
  /* background: white; */
  position: relative;
  /* margin: 0 0 0.5% 39%; */
  text-align: center;

  border-radius: 1em;
  color: blue;
  font-family: sans-serif;
  font-weight: 100;
  font-size: 1.3em;
  font-weight: bold;
  /* background: red; */
}
.butgroup button {
  width: 100px;
  height: 50px;
  border-radius: 1em;
  font-weight: bold;
  margin: 0 1em;
  /* color: rgb(255, 0, 100); */
  color: blue;
  background-color: #fff;
  box-shadow: rgb(253, 253, 253) 0 10px 50px 0, inset #333 0 0 0 0px,
    inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
  /* font-style: bold; */
  /* font-size: 1.5em; */
}

.container1 {
  width: 100%;
  /* height: 400px; */
  display: flex;
  /* margin: 1em; */
  /* background-color: white; */
}

.aboutme {
  /* background-color: yellowgreen; */
  width: 50%;
  margin: 1em;
  padding: 3em;
}

.aboutme p {
  color: white;
  text-align: left;
  padding: 1em;
  line-height: 150%;
}

.contact {
  /* background-color: brown; */
  width: 50%;
  margin: 1em;
}
ul {
  padding: 2.5em 0 0 0;
}

li {
  display: flex;
  text-align: left;
  font-weight: bold;
  padding: 0.5em 0 0.5em 0;
}
.icons {
  width: 4%;
  color: blue;
  font-size: 18px;
  border-right: 1em;
}
.contact-name {
  color: #010203;
  width: 20%;
  /* font-size: 1.1em; */
  text-transform: uppercase;
  /* background-color: yellow; */
}

.contact-info {
  color: #010203;
  width: 52%;
  /* padding: 0.5em; */
  /* background-color: white; */
}

iframe {
  border-radius: 1em;
  margin-top: 1em;
}
@media screen and (max-width: 768px) {
  .container1 {
    display: block;
  }
  .aboutme {
    width: 80%;
    margin-left: 5em;
    /* background-color: blue;  */
  }
  .aboutme p,
  h2 {
    color: #010203;
    font-weight: bold;
  }
  .contact {
    width: 80%;
    margin: 0 20em 0 7em;
  }
}
</style>
