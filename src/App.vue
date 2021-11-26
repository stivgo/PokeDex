<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
:root {
  --first-color: #353535;
  --second-color:#5E5E5E;
  --third-color: #F22539;
  --fourth-color: #C00E20;
  --fifth-color: #BFBFBF;
  --sixth-color: #ECA539;
  --seventh-color: #FFFFFF;
  --eight-color: #F5F5F5;
}

*{
  border: none;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  margin: 0;
  padding: 0;

}
body{
  background: var(--eight-color);
}

button{
  cursor: pointer;
}
</style>
