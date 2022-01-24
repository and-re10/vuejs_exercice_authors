<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <h1 v-for="account in $store.state.accounts" :key="account.id">Counter {{account}}</h1> -->
    <Authors/>
  </div>
</template>

<script>
// @ is an alias to /src
import Authors from '@/components/Authors.vue'

export default {
  name: 'Home',
  components: {
    Authors
  }
}
</script>
