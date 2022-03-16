<template>
  <div class="container" :class="paddingSize">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["paddingSize"]
};
</script>

<style scoped>
.container {
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.paddingSm {
  padding-top: 1%;
  padding-bottom: 1%;
}

.paddingM {
  padding-top: 4%;
  padding-bottom: 4%;
}
</style>
