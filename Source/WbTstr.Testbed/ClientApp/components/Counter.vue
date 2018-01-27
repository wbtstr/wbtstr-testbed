<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Counter
            </h1>
            <h2 class="subtitle">
              Use the buttons to increment or decrement the counter.
            </h2>
          </div>
      </div>
    </section>

    <div class="counter-page">
      <div class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="title" @click.right="changeColor">{{ count }}</p>
          </div>
        </div>
      </div>

      <div class="level">
        <div class="level-item">
          <button class="button is-warning"  @click="decrement">Decrement</button>
        </div>
        <div class="level-item">
          <button class="button" @click="resetInfo" @click.middle="reset">Reset</button>
        </div>             
        <div class="level-item">
          <button class="button is-success" @click="increment">Increment</button>
        </div>
      </div>      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Counter',

    computed: {
      count() {
        return this.$store.state.count;
      },
    },

    methods: {
      decrement() {
        this.$store.commit('decrement');
      },
      reset() {
        this.$store.commit('reset');
      },      
      increment() {
        this.$store.commit('increment');
      },
      changeColor(event) {
        event.preventDefault();
        event.target.classList.toggle('has-text-grey')
      },
      resetInfo() {
        alert('Use middle-click on this button!');
      }
    },
  };
</script>

<style lang="css">
  .counter-page {
    margin-top: 1em;
  }

  .counter-page .title {
    font-size: 10em;
  }
</style>