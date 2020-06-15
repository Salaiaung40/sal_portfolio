<template>
  <div class="languages">
						
                <ul>
                  <li>
                    <div class="image">
                      <div> <img src="@/assets/Imag/myanmar-flag.png" /></div>
                    </div>
                    <div class="languages-name"><p>Burmese</p></div>
                    
                    <div class="languages-line">
                      <div id="lang01" class="languages-line-this"></div>
                    </div>
                    <div class="languages-level"> <p>Native</p> </div>
                     </li>

                  <li>
                    <div class="image">
                      <div>
                        <img src="@/assets/Imag/uk-flag.png" />
                        </div>
                    </div>
                    <div class="languages-name"><p>English</p></div>
                    
                    <div class="languages-line">
                      <div id="lang02" class="languages-line-this"></div>
                    </div>
                    <div class="languages-level"> <p>Good</p> </div>
                  </li>

                  <li>
                    <div class="image">
                      <div>
                        <img  src="@/assets/Imag/belgium-flag.png" />
                        </div>
                    </div>
                    <div class="languages-name"><p>Dutch</p> </div>
                    
                    <div class="languages-line">
                      <div id="lang03" class="languages-line-this"></div>
                    </div>
                    <div class="languages-level"> <p>Beginner (NT2.2)</p> </div>
                  </li>
                </ul>
						
					</div>
</template>

<script>
export default {

}
</script>

<style scoped>

 .languages {
	width: 100%;
  height: auto;
  
}

ul li {
	width: 100%;
	padding-bottom: 16px;
	/* background-color: transparent; */
	overflow: hidden;
}
li{
  display: flex;
}

ul li p {
	padding: 0;
	margin: 1.3em 0em 0em 0em;;
	text-transform: uppercase;
	font-family: arial, sans-serif;
	font-size: 18px;
	color: #010203; 
}



.image {
   margin: 0em 1em 0em 0em;
  position: relative;
  float: left;
	font-size: 0.65em;
  z-index: 2;
}
.image img {
	border-radius: 50%;
  overflow: none;
	height: 5em !important;
	border: 0.03em solid #010203;
	/* border: 0.35em solid white; */
}

  .languages-name {
	/* float: left; */
	/* width: 20%; */
	width: 117px;
  font-weight: 600;
  margin-right: 1em;
}
.languages-level{
  /* float: right; */
  width: 117px;
	width: 200px;
  margin-left: 1em;
  /* text-align-last: left; */
  /* font-weight: 500; */
  
}
  .languages-line {
	/* float: right; */
	width: 40%;
	height: 20px;
	margin: 1.1em 0em 0em 0em;
	/* padding: 1.3em 0em 0em 0em; */
	border-radius: 100px;
	background-color: white;
	overflow: hidden;
  
}
  .languages-line .languages-line-this {
	width: 10%;
	height: 100%;
	background-color: #333;
	overflow: hidden;
}
  ul li #lang01 {
	width: 100%;
}
  ul li #lang02 {
	width: 75%;
}
   ul li #lang03 {
	width: 10%;
}




</style>

