/* eslint-disable vue/no-parsing-error */
<template>
  <div id="contact">
    <h2>Reference</h2>
    <div class="reference">
      <div class="pic">
        <img src="@/assets/Imag/IMG_5068.png" alt="picture" /> <br />

        <a
          href="https://drive.google.com/file/d/10ST2XPIICPAOLX81JR1UgiySHBAptNu0/view?usp=sharing"
          target="_"
          download
        >
          <button>
            Click here to Download <br />
            Recomendation
          </button>
        </a>
      </div>

      <ul>
        <li>
          <div class="icons"><i class="fa fa-map-marker"></i></div>
          <div class="contact-name"><p>Name</p></div>
          <div class="contact-info"><p>Benedikt Lantsoght</p></div>
        </li>

        <li>
          <div class="icons"><i class="fa fa-at"></i></div>
          <div class="contact-name"><p>E-mail</p></div>
          <div class="contact-info">
            <p>
              <a href="mailto:Benedikt.Lantsoght@intecbrussel.be">
                Benedikt.Lantsoght@intecbrussel.be</a
              >
            </p>
          </div>
        </li>

        <li>
          <div class="icons"><i class="fa fa-mobile-phone"></i></div>
          <div class="contact-name"><p>GSM</p></div>
          <div class="contact-info"><p>+32 499 388 227</p></div>
        </li>

        <li>
          <div class="icons"><i class="fa fa-globe"></i></div>
          <div class="contact-name"><p>Website</p></div>
          <div class="contact-info">
            <p>
              <a href="http://letmesee.be" target="_" style="color:blue">
                www.letmesee.be</a
              >
            </p>
          </div>
        </li>
      </ul>
    </div>
    <section id="hire">
      <h1>Contact Me</h1>

      <form id="form" class="contact-form" @submit.prevent="sendEmail">
        <div class="field name-box">
          <input
            type="text"
            id="name"
            name="user_name"
            v-model="user_name"
            @change="inputCheck"
            placeholder="Who Are You?"
            required
          />
          <label for="name">Name</label>
          <span class="ss-icon" v-if="inputCheck">check</span>
        </div>

        <div class="field email-box">
          <input
            id="email"
            type="email"
            name="user_email"
            placeholder="name@email.com"
            required
          />
          <label for="email">Email</label>
          <span class="ss-icon">check</span>
        </div>

        <div class="field company-box">
          <input
            id="company"
            type="text"
            name="user_company"
            placeholder="Company / Organization"
          />
          <label for="name">Company</label>
          <span class="ss-icon">check</span>
        </div>

        <div class="field msg-box">
          <textarea
            id="msg"
            rows="4"
            name="user_message"
            placeholder="Your message goes here..."
            required
          ></textarea>
          <label for="msg">Msg</label>
          <span class="ss-icon">check</span>
        </div>

        <input class="button" type="submit" value="Send" />
      </form>
    </section>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
// import Check from "@/components/check.js";
export default {
  name: "Contact",
  data: () => ({
    user_name: "",
  }),

  methods: {
    // Check,
    inputCheck: () => {
      var fieldName = document.forms["form"]["user_name"].value;
      // var fieldMail = document.forms["form"]["user_email"].value;
      // var fieldCompany = document.forms["form"]["user_company"].value;
      // var fieldMessage = document.forms["form"]["user_message"].value;

      if (fieldName != "") {
        // this.addClass('focused');
        "textarea + label + span".css({ opacity: 1 });
      } else {
        // this.removeClass('focused');
        "textarea + label + span".css({ opacity: 0 });
      }
    },

    //  inputLock() {
    //         blur(function () {
    //             ('#hire textarea').each(function () {
    //                 // this = textarea = this;
    //                 if ( this.value != '' ) {
    //                   this.addClass('focused');
    //                   ('textarea + label + span').css({'opacity': 1});
    //                 }
    //                 else {
    //                   this.removeClass('focused');
    //                   ('textarea + label + span').css({'opacity': 0});
    //                 }
    //             });
    //         }),

    //         // #hire.field:first-child
    //         blur(function () {
    //             ('#hire .field:first-child input').each(function () {
    //                 // $this = $(this);
    //                 if ( this.value != '' ) {
    //                   this.addClass('focused');
    //                   ('.field:first-child input + label + span').css({'opacity': 1});
    //                 }
    //                 else {
    //                   this.removeClass('focused');
    //                   ('.field:first-child input + label + span').css({'opacity': 0});
    //                 }
    //             });
    //         }),

    //         // #hire.field:
    //         blur(function () {
    //             ('#hire .field:nth-child(2) input').each(function () {
    //                 // $this = $(this);
    //                 if ( this.value != '' ) {
    //                   this.addClass('focused');
    //                   ('.field:nth-child(2) input + label + span').css({'opacity': 1});
    //                 }
    //                 else {
    //                   this.removeClass('focused');
    //                   ('.field:nth-child(2) input + label + span').css({'opacity': 0});
    //                 }
    //             });
    //         })
    //       },

    sendEmail: (e) => {
      var fieldName = document.forms["form"]["user_name"].value;
      var fieldMail = document.forms["form"]["user_email"].value;
      // var fieldCompany = document.forms["form"]["user_company"].value;
      var fieldMessage = document.forms["form"]["user_message"].value;

      if (fieldName == "" && fieldMail == "" && fieldMessage == "") {
        alert("Name, e-mail and message must be filled out!");
        return false;
      } else {
        alert("Thank you for the mail!");
      }

      var template_params = {
        user_email: "user_email_value",
        user_name: "user_name_value",
        user_company: "user_company_value",
        message_html: "message_html_value",
      };

      var service_id = "gmail";
      var template_id = "portfolio";
      emailjs.send(service_id, template_id, template_params);
      emailjs
        .sendForm("gmail", "portfolio", e.target, "user_7iiFpEuMin1URLWCPTDEV")
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>

<style scoped>
#contact {
  width: 100%;
  font-family: sans-serif;
  /* background: blue; */
  /* background: #efefef; */
  /* font-size: 62.5%; */
}
#contact h2 {
  /* margin-bottom: 40px; */
  font-size: 2em;
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: 100;
  padding: 30px 0 0 0;
  color: #fff;
  /* text-shadow: 3px 4px 2px #010203; */
}

.reference {
  display: flex;
  /* display: inline-block; */
  /* width: 80%; */
  /* background-color: pink; */
  text-align: center;
  /* align-items: center; */
  /* margin: 0 15em 0 30%; */
  /* position: center; */
}
.pic {
  width: 20%;
  /* background:lightblue; */
  margin: 0 0 0 20%;
}
.pic img {
  width: 3em;
  height: 3em;
  top: 1em;
  position: relative;
  font-size: 1.8em;
  background: rgb (0, 0, 0);
  border-radius: 50%;
}
button {
  width: 13em;
  height: 3.5em;
  border-radius: 1em;
  font-weight: bold;
  margin: 3em auto;
  color: blue;
  background-color: #fff;
  box-shadow: rgb(253, 253, 253) 0 10px 50px 0, inset #333 0 0 0 0px,
    inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
}

.reference ul {
  width: 40%;
  margin: 2em 1em 0 0;
}

.reference li {
  display: flex;
  text-align: left;
  font-weight: bold;
  padding: 1em 0 0.5em 2em;
  /* background-color: green; */
}
.icons {
  width: 5%;
  color: blue;
  font-size: 18px;
  /* border-right: 2em; */
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
  width: 72%;
  /* padding: 0.5em; */
  /* background-color: white; */
}

body section {
  background: white;
  margin: 60px auto 120px;
  /* border-top: 15px solid #313a3d; */
  text-align: center;
  padding: 50px 0 110px;
  width: 80%;
  max-width: 1100px;
  border-radius: 1em;
  /* background-color: green; */
}
body section h1 {
  margin-bottom: 40px;
  font-size: 4em;
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: 100;
}

/* form section*/
form {
  width: 58.3333333333%;
  margin: 0 auto;
}
form .field {
  width: 100%;
  position: relative;
  margin-bottom: 35px;
}

/* label section*/
form .field label {
  text-transform: uppercase;
  position: absolute;
  top: 0;
  left: 0;
  background: #313a3d;
  color: #fff;
  width: 100%;
  padding: 18px 0;
  border-radius: 1em;
  font-size: 1.45em;
  letter-spacing: 0.075em;
  transition: all 333ms ease-in-out;
}

/* Check Mark section*/
form .field label + span {
  font-family: "SSStandard";
  opacity: 0;
  color: white; /*here to test */
  display: block;
  position: absolute;
  top: 12px;
  left: 7%;
  font-size: 2.5em;
  /* text-shadow: 1px 2px 0 lightblue; */
  text-shadow: 1px 2px 0 #cd6302;
  transition: all 333ms ease-in-out;
}

/* fields section*/
form .field input[type="text"],
form .field input[type="email"],
form .field textarea {
  border: none;
  background: #e8e9ea;
  width: 80.5%;
  margin: 0;
  padding: 18px 0;
  padding-left: 19.5%;
  border-radius: 1em;
  color: #313a3d;
  font-size: 1.4em;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
form .field input[type="text"]#msg,
form .field textarea#msg {
  height: 18px;
  resize: none;
  /* -webkit-transition: all 333ms ease-in-out;
  -moz-transition: all 333ms ease-in-out;
  -o-transition: all 333ms ease-in-out;
  -ms-transition: all 333ms ease-in-out; */
  transition: all 333ms ease-in-out;
}

/* focus & JS toggle class section */
form .field input[type="text"]:focus,
form .field input[type="text"].focused,
form .field textarea:focus,
form .field textarea.focused {
  outline: none;
}
form .field input[type="text"]:focus#msg,
form .field input[type="text"].focused#msg,
form .field textarea:focus#msg,
form .field textarea.focused#msg {
  padding-bottom: 150px;
}
form .field input[type="text"]:focus + label,
form .field input[type="text"].focused + label,
form .field input[type="email"]:focus + label,
form .field input[type="email"].focused + label,
form .field textarea:focus + label,
form .field textarea.focused + label {
  width: 20%;
  background: lightblue;
  /* background: #fd9638; */
  color: #313a3d;
}

/* js toggle class section*/
form .field input[type="text"].focused + label,
form .field textarea.focused + label {
  color: #fd9638;
}

/* fiel hover section */
form .field:hover label {
  width: 20%;
  background: #313a3d;
  color: white;
}

/* submt button section*/
form input[type="submit"] {
  background: rgb(21, 164, 212);
  /* background: #fd9638; */
  color: white;
  -webkit-appearance: none;
  border: none;
  margin: 1em;
  border-radius: 1em;
  text-transform: uppercase;
  position: relative;
  padding: 17px 50px 10px 50px;
  font-size: 1.4em;
  letter-spacing: 0.1em;
  font-family: sans-serif;
  font-weight: 300;
  transition: all 333ms ease-in-out;
}
form input[type="submit"]:hover {
  background: blue;
  /* background: #313a3d; */
  color: lightblue;
  /* color: #fd9638; */
}
form input[type="submit"]:focus {
  outline: none;
  background: green;
  /* background: #cd6302; */
}

/* responsive section */
@media screen and (max-width: 900px) {
  /* .reference{
display: block;
} */
  .pic {
    width: 30%;
    /* display: inline-block; */
    /* margin: 0  0  0 35%; */
    margin: 0 0 0 10%;
  }
  .reference ul {
    width: 50%;
    /* margin: 0 0 0 25%; */
    /* background: yellowgreen; */
  }
}
</style>
