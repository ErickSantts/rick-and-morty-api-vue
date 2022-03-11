<template>
  <div class="detalhes">
    <div class="card">
      <div class="img">
        <img :src="$store.state.personage.image" alt="" />
      </div>
      <div class="data">
        <div class="detail">
          <span class="text-gray">Nome:</span>
          <span>{{ $store.state.personage.name }}</span>
        </div>
        <div class="detail">
          <span class="text-gray">Status:</span>
          <span>{{
            $store.state.personage.status == "Dead" ? "Morto" : "Vivo"
          }}</span>
        </div>
        <div class="detail">
          <span class="text-gray">Espécie:</span>
          <span>{{ $store.state.personage.species }}</span>
        </div>
        <div class="detail">
          <span class="text-gray">Gênero:</span>
          <span>{{ $store.state.personage.gender == "Male" ? "Masculino" : "Feminino"}}</span>
        </div>
        <div class="detail">
          <span class="text-gray">Origem:</span>
          <span>{{ $store.state.personage.origin.name != "unknown" ? $store.state.personage.origin.name : "Desconhecido"}}</span>
        </div>
        <div class="detail">
          <span class="text-gray">Localidade:</span>
          <span>{{ $store.state.personage.location.name != "unknown" ? $store.state.personage.location.name : "Desconhecido"}}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="buttons-div">
    <input
      class="button-pag"
      type="button"
      value="Voltar"
      @click.prevent.stop="voltar"
    />
  </div>
</template>

<script>
export default {
  data() {},
  methods: {
    voltar() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.detalhes {
  overflow: hidden;
  height: calc(100vh - 150px);
  width: 100%;
  display: flex;
  background-color: var(--cor-back-secundaria);
}
.card {
  display: flex;
  width: 700px;
  align-items: center;
  text-align: center;
  margin: auto;
}
.img {
  width: 300px;
  text-align: center;
}
img {
  border-radius: 20px 0 0 20px;
}

.data {
  margin: auto;
  height: 300px;
  width: 500px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: aliceblue;
  background: var(--cor-padrao);
  border-radius: 0px 20px 20px 0px;
}
.detail {
  font-size: 20px;
}

.button-pag {
  width: 150px;
  height: 40px;
  color: aliceblue;
  background-color: var(--cor-secundaria);
  cursor: pointer;
  border-radius: 10px;
  border: none;
  transition: 0.8s;
  margin: auto 20px;
}

.buttons-div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: var(--cor-back-secundaria);
}

.text-gray {
  color: rgb(158, 158, 158);
  margin-right: 5px;
}
</style>
