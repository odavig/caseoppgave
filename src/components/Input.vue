<template>
  <input
    @input="handleInput"
    :class="className"
    :placeholder="placeholder"
    type="text"
  />
</template>

<script>
export default {
  props: ["placeholder", "className"],
  methods: {
    handleInput(e) {
      this.$store.dispatch("getSearch", e.target.value);
    }
  }
};
</script>

<style>
input {
  height: 2em;
  font-size: 14px;
  border-radius: 10px;
  border: none;
  padding-left: 12px;
  transition: 0.3s;
}

.background {
  background-color: #f1f1f1;
}

.medium {
  width: 200px;
  height: 2.3em;
}
</style>
