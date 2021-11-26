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
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
}
.loading {
  animation-name: rebote;
  animation-duration: 0.6s;
  animation-iteration-count: infinite;
  animation-direction: reverse;
  animation-timing-function: ease-out;
  position: relative;
}

@keyframes rebote {
  0%   {left:0px; top:0px;}
  25%  {left:0px; top:0px;}
  50%  {left:0px; top:-80px;}
  75%  {left:0px; top:-80px;}
  100% {left:0px; top:0px;}
}
</style>
