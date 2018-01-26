<template>
  <div>
    <h1>{{ count }}</h1>

    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
  export default {
    name: 'Home',

    data() {
      return {
        msg: 'Hello, world!',
      };
    },

    computed: {
      count() {
        return this.$store.state.count;
      },
    },

    methods: {
      increment() {
        this.$store.commit('increment');
      },
      decrement() {
        this.$store.commit('decrement');
      }
    },
  };
</script>

<style lang="css">

</style>