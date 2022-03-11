<template>
  <nav class="nav">
    <router-link to="/">Rick and Morty</router-link>
  </nav>
  <router-view/>
</template>

<style>
*{
  --cor-padrao: #2c3e50;
  --cor-secundaria: #218721;
  --cor-back-secundaria: #24282F;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

.nav{
  background: var(--cor-padrao);
  width: 100vw;
  height: 50px;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.nav a{
  color: aliceblue;
  font-size: 40px;
}
</style>
