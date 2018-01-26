<template>
  <div>
    <section class="hero is-medium is-info">
      <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Greetings!
            </h1>
            <h2 class="subtitle">
              This application is used as a testbed for the WbTstr integration test suite.
            </h2>
          </div>
      </div>
    </section>
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