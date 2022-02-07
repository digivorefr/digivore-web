<template>
  <div
    class="wrap hero"
    data-spe="--screen-height--with-background"
    data-layout="--flex--justify-center--items-center"
  >
    <div class="image hero__back">
      <img
        :src="background"
        alt="Digivore background"
        width="100%"
      >
    </div>

    <div
      class="hero__front"
      data-spe="--txt-center"
      data-layout="--grid"
      data-gap="--2"
    >
      <div class="hero__front__title">
        <span
          v-for="(letter, index) in 'Digivore'"
          :key="index"
        >{{ letter }}</span>
      </div>
      <div class="hero__front__subtitle">
        <span
          v-for="(letter, index) in 'Frontend senior developer'"
          :key="index"
        >{{ (letter === ' ') ? '&nbsp;' : letter }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    background: {
      type: String,
      required: true,
    },
  },
});

</script>
