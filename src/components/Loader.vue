<template>
<section>
  <img class="loading" src="@/assets/loader.png" alt="Imagen Pokebola" />
</section>
</template>

<script>
export default {
  name: 'Loader',
};
</script>

<style scoped>
section{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
.loading {
  position: relative;
  animation-name: rebote;
  animation-duration: 0.6s;
  animation-iteration-count: infinite;
  animation-direction: reverse;
  animation-timing-function: ease-out;
}

@keyframes rebote {
  0%   {left:0px; top:0px;}
  25%  {left:0px; top:0px;}
  50%  {left:0px; top:-80px;}
  75%  {left:0px; top:-80px;}
  100% {left:0px; top:0px;}
}
</style>
