<template>
  <div class="layout">
    <navbar />
    <div class="page">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from 'scripts/components/Navbar.vue';

export default Vue.extend({
  components: {
    navbar: Navbar,
  },
});
</script>
