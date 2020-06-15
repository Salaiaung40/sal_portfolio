<!-- work >> container >> appcard >> img / h1 / p -->
<template>
   <div id="work">
    <h1 class="title">My Projects</h1>

    <div  class="container">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    

      <appcard>
        <img slot="cover" src="@/assets/salaibcard.png" alt="business card">     
        <h1 slot="header">Business Card</h1>
        <p slot="content">HTML 5, CSS 3</p>
        <!--
        <a href="https://github.com/docmars?tab=repositories"><i class="fa fa-github" style="font-size:36px"></i></a> -->
        <!-- need to add link to Github project -->
      </appcard>

      <appcard > 
        <img slot="cover" src="@/assets/mp3player.png">
        <h1 slot="header">MP3 musice player</h1>
        <p slot="content">Framework (Vue CLI) </p>
      </appcard>

      <appcard > 
        <img slot="cover" src="@/assets/salaishop.png" alt="Shop">
        <h1 slot="header">Salai Online Shop</h1>
        <p slot="content">Framework (Vue CLI)</p>
      </appcard>
  
      <appcard  >
        <img slot="cover" src="@/assets/logo.png" alt="profile"> 
        <h1 slot="header">My Portfolio</h1>
        <p slot="content">Framework (Vue CLI)</p>
      </appcard>

    </div> <!--end of container-->
  </div>
  <!--end of main div work-->
</template>

<script>
import card from "@/components/cards/project-card.vue";

 export default {
  name: "Works",
  components:{
     'appcard': card
  },
  props: {
    
  }
};

</script>



<style scoped>

#work {
  /* margin: 40px 0 0 0; */
  font-size: 14px;
  font-weight: 500;
  font-family: arial, sans-serif;
  /* background-color: green; */
 /* background-image: linear-gradient(to right, rgb(34, 31, 31), rgba(255,0,0,0)); */
  /* -webkit-font-smoothing: antialiased; */
}

.title {
  padding-top: 1em;
  font-size: 4em;
  text-transform: uppercase;
  font-family:  sans-serif;
  /* text-shadow: 3px 4px 2px #010203; */
  font-weight: 100;
  color: #fff;
  text-align: center;
  /* background-color: hotpink; */
 }

p {
  line-height: 1.5em;
}

h1+p, p+p {
  margin-top: 10px;
}

.container {
  padding: 30px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* background-color: white; */
}


  


img {
  position: relative;
  flex: 0 0 240px;
  width: 240px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px, inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  /* background-color: yellow; */
}

 /* .appcard {
  opacity: 1;
  position: absolute;
  top: -20px;
  left: -20px;
  width: 80%;
  height: 90%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
} */
/*
#card-wrap {
  margin: 20px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  
}
.card-bg {
  opacity: 0.5;
  position: absolute;
  top: -20px;
  left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95), opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
}

.card-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
  .card-info.p {
   opacity: 0;
  text-shadow: black 0 2px 3px;
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  
 .card-info * {
  position: relative;
  z-index: 1;
 }
  
  .card-info:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
  background-blend-mode: overlay;
  opacity: 0;
  transform: translateY(100%);
  transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.card-info h1 {
  font-family: "Playfair Display";
  font-size: 36px;
  font-weight: 700;
  text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
}
*/
</style> 