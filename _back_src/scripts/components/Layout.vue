<template>
  <div class="layout">
    <main class="page">
      <router-view />
    </main>
    <bottom />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import bottom from 'scripts/components/Bottom.vue';

export default Vue.extend({
  components: {
    bottom,
  },
});
</script>
