<template>
  <footer class="footer">
    <div
      class="wrap"
      data-spe="--padded"
    >
      <div
        class="container"
        data-layout="--flex--items-center--justify-end"
        data-gap="2"
      >
        Digivore {{ currentYear }} - All right reserved
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
