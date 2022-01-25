<template>
  <header class="header">
    <div
      class="container"
      data-layout="--flex--items-center"
      data-gap="2"
    >
      <img
        :src="logo"
        alt="Digivore logo - Frontend senior developer"
        width="48"
      >
      <span class="name">
        digivore<br>
        <span>frontend developer<span />
        </span></span>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

import logo from 'images/digivore-logo.svg';

export default Vue.extend({
  data() {
    return {
      logo,
    };
  },
});
</script>
