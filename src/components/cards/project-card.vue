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



