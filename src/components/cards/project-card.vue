<!-- car-wrap >> card >> cover / card-info >> slot -->
<template>
  <div
    class="card-wrap"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="card"
   >
  <!-- :style="cardStyle" -->
      <div class="card"
            :style="cardStyle">
      <slot name="cover" :style="[cardStyle, cardBgTransform]" ></slot>
      
            <div class="card-info" >
              <slot name="header"></slot>
              <slot name="content"></slot>
              
              <slot name="link">  </slot>
            </div>
      </div>
  </div>
  <!--End of main app- card-wrap dev-->
</template>



<script>

export default {
  name: "app-Card",

  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null,
  }),
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`,
      };
    },
   
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    },
  },
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
};
</script>

<style scoped>
.card-wrap {
  margin: 20px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  /*background-color: #fff; */
}
.card-info{
  opacity: 0;
   font-size: large;
   width: 100%;
   /* padding-top: 50px; */
  /* padding: 90px; */
	position: absolute;
	bottom: 0;
	color: #fff;
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 9);
  
}

.card-wrap:hover .card-info {
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  /* color: red; */
  color: #fff;
  margin-top: 0%;
  border-radius: 1em;
  padding-top: 35%;
  opacity: 0.9;
  position: absolute;
  top: 0;
  /* transition: all 0.3s ease 0s; */
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  /* transform: rotateZ(0deg); */
}
</style>

 /* slot header {
  /* display: block; */
  /* font-size: 60px; */
  /* font-weight: 700; */
  /* margin: 0 0 15px 0; */
  /* text-transform: capitalize; 
        } */

        /* .box .icon{
            width: 100%;
            padding: 0;
            margin: 0;
            list-style: none;
        }
        .box .icon li{
            display: inline-block;
        }
        .box .icon li a{
            display: block;
            width: 40px;
            height: 40px;
            line-height: 40px;
            border-radius: 50%;
            background:rgb(254, 114, 0);
            font-size: 20px;
            color: #fff;
            margin-right:10px;
            transition: all 0.3s ease 0s;
        }
        .box .icon li a:hover {
            border-radius: 0;
            text-decoration: none !important;
        } */
/*
.card-wrap:hover .card-info {
  transform: translateY(0);
}
.card-wrap:hover .card-info p {
  opacity: 1;
}
.card-wrap:hover .card-info,
.card-wrap:hover .card-info p {
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}
.card-wrap:hover .card-info:after {
  transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 1;
  transform: translateY(0);
}
.card-wrap:hover .card {
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 0.8;
}
.card-wrap:hover .card {
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
    box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: rgba(255, 255, 255, 0.2) 0 0 40px 5px, white 0 0 0 1px,
    rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
    inset white 0 0 0 6px;
}

.card {
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
}
*/
/* .card-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: black;
  transform: translateY(40%);
  transition: 0.6s 1s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.card-info.p {
  opacity: 0;
  text-shadow: red 0 2px 3px;
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
  background-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  background-blend-mode: overlay;
  opacity: 0;
  transform: translateY(100%);
  transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.card-info h1 {
  font-size: 26px;
  font-weight: 700;
  text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
} */

