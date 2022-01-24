<template>
    <div style="width: 100%; min-height: 400px; background-color: lightgrey; border-radius: 4px">
      <h1 class="title">Comptes</h1>
      <div v-if="$store.state.accounts.length > 0" style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-around; width: 100%; height: 100%">
        <div v-for="account in $store.state.accounts" :key="account.id" class="author_card">
          <div class="row">
            <span class="card_title">Prenom: </span>
            <p :style="[ account.first_name === 'not found' ? {color: 'crimson'} : {color: null}, {fontWeight: 'bold'}]">{{account?.first_name}}</p>
          </div>
          <div class="row">
            <span class="card_title">Nom: </span>
            <p :style="[ account.last_name === 'not found' ? {color: 'crimson'} : {color: null}, {fontWeight: 'bold'}]">{{account?.last_name}}</p>
          </div>
          <div class="row">
            <span class="card_title">Email: </span>
            <p :style="[ account.email === 'not found' ? {color: 'crimson'} : {color: null}, {fontWeight: 'bold'}]">{{account?.email}}</p>
          </div>
          <div class="row">
            <span class="card_title">Numero de telephone: </span>
            <p :style="[ account.phone === 'not found' ? {color: 'crimson'} : {color: null}, {fontWeight: 'bold'}]">{{account?.phone}}</p>
          </div>

        </div>
      </div>
      <div v-else style="display: flex; justify-content: center; align-items:center;">
          <h3>Aucun compte trouvé.</h3>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Accounts'
}
</script>
<style scoped>
    .author_card {
        width: 30%;
        background-color: white;
        margin-bottom: 20px;
        border-radius: 15px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .card_title {
        margin-right: 10px;
    }
    .title {
        border-radius: 4px 4px 0px 0px;
    background-color: #41ba82;
    padding: 20px 0px;
  }
</style>
