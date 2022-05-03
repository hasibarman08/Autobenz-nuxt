<template>
  <div>
    <PaginatioComponent />
  </div>
</template>

<script>
import PaginatioComponent from "~/components/Page/PaginatioComponent";

export default {
  components: {
    PaginatioComponent,
  },
  head() {
    return {
      title: "AUTOBENZ | Pagination",
    };
  },
};
</script>

<style scoped>
</style>
