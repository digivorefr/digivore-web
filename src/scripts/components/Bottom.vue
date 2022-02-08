<template>
  <footer class="footer">
    <div
      class="wrap"
      data-spe="--padded"
    >
      <div
        class="container"
        data-spe="--txt-center"
      >
        Digivore {{ currentYear }} - All rights reserved
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
    };
  },
  computed: {
    currentYear: (): string => `${new Date().getFullYear()}`,
  },
});
</script>
