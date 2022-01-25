<template>
  <div class="layout">
    <navbar />
    <main class="page">
      <router-view />
    </main>
    <bottom />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import navbar from 'scripts/components/Navbar.vue';
import bottom from 'scripts/components/Bottom.vue';

export default Vue.extend({
  components: {
    navbar,
    bottom,
  },
});
</script>
