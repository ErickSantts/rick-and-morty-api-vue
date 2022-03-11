<template>
  <div class="home">
    <header class="titulos">
      <h1>Quer saber mais sobre algum personagem?</h1>
      <h2>É só clicar sobre ele.</h2>

      <div>
        <input
        class="seach-input"
          type="text"
          placeholder="Digite o nome de um personagem."
          v-model="personage"
        />
        <input
          class="button-seach"
          type="button"
          value="Pesquisar"
          @click.prevent.stop="buscarPersonagem"
          v-show="personage != ''"
        />
      </div>
    </header>
    <div class="cards">
      <div
        class="card-content"
        v-for="personagem in personagens"
        :key="personagem"
      >
        <h2>{{ personagem.name }}</h2>
        <img
          class="img-personage"
          v-bind:src="personagem.image"
          alt="personagem.name"
          @click="selectPersonage(personagem)"
        />
      </div>
    </div>
    <div class="buttons-div">
      <input
        class="button-pag"
        type="button"
        value="Página Anterior"
        @click.prevent.stop="alterarPagina(0)"
        v-show="$store.state.page > 1"
      />
      <input
        class="button-pag"
        type="button"
        value="Próxima página"
        @click.prevent.stop="alterarPagina(1)"
        v-show="$store.state.page < 42"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      personagens: [],
      personage: "",
    };
  },
  mounted() {
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then((response) => response.json())
      .then((data) => (this.personagens = data.results));
  },
  components: {},
  methods: {
    selectPersonage(personage) {
      this.$store.dispatch("selectPersonage", personage);
      this.$router.push("Detalhes");
    },
    alterarPagina(data) {
      this.$store.dispatch("alterarPagina", data);
      fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.$store.state.page}`
      )
        .then((response) => response.json())
        .then((data) => (this.personagens = data.results));
    },
    buscarPersonagem() {
      fetch(`https://rickandmortyapi.com/api/character/?name=${this.personage}`)
        .then((response) => response.json())
        .then((data) => (this.personagens = data.results));

      this.personage = "";
    },
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.card-content {
  padding: 10px 10px;
  cursor: pointer;
  transition: 1s;
  text-align: center;
}
.card-content:hover {
  color: blue;
}
.img-personage {
  transition: 0.8s;
  transition-delay: 0.3s;
  border-radius: 20px;
}

.img-personage:hover {
  border: 2px solid var(--cor-padrao);
  border-radius: 50%;
}

.titulos {
  text-align: center;
  margin: 20px auto;
}

.button-pag {
  width: 150px;
  height: 40px;
  color: aliceblue;
  background-color: var(--cor-padrao);
  cursor: pointer;
  border-radius: 10px;
  border: none;
  transition: 0.8s;
  margin: auto 20px;
}

.button-seach {
  width: 150px;
  height: 42px;
  color: aliceblue;
  background-color: var(--cor-padrao);
  cursor: pointer;
  border: none;
  transition: 0.8s;
  
  border-radius: 0px 10px 10px 0px;
}
.buttons-div
 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 20px ;
}

.button-pag:hover,
.button-seach:hover {
  background: var(--cor-secundaria);
}

.seach-input{
  width: 300px;
  height: 40px;
  border-radius: 10px 0px 0px 10px;
  border: none;
  padding-left: 10px;
  border: var(--cor-padrao) 1px solid;
  transition: 0.8s;
}
</style>
