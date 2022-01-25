<template>
  <div data-layout="--grid">
    <div
      class="wrap wrap--screen-height--with-background"
      data-layout="--flex--justify-center--items-end"
    >
      <div class="image">
        <img
          :src="lost"
          alt="Not Found"
          width="100%"
        >
      </div>
      <div class="wrap wrap--padded">
        <div
          class="container"
          data-layout="--grid--justify-center"
        >
          <h1>not found</h1>
          <div data-layout="--flex--justify-center">
            <router-link
              :to="{name: 'Home'}"
              class="link link--button"
            >
              Go home
              <router-link />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import lost from 'images/lost.jpg';

export default Vue.extend({
  data() {
    return {
      lost,
    };
  },
});
</script>
