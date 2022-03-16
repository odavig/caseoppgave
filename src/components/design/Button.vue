<template>
  <button :class="btnClass">
    {{ btnTitle }}
  </button>
</template>

<script>
export default {
  props: ["btnTitle", "btnClass"],
  data() {
    return {
      title: "Logg inn"
    };
  }
};
</script>

<style scoped>
button {
  cursor: pointer;
}

.primary {
  background-color: #008066;
  color: white;
  border: 3px solid #008066;
  padding: 2% 4% 2% 4%;
  border-radius: 12px;
}

.primary-white {
  background-color: white;
  color: #008066;
  border: 3px solid #008066;
  padding: 2% 4% 2% 4%;
  border-radius: 12px;
  font-size: 18px;
}

.secondary {
  background-color: white;
  color: #008066;
  border: 3px solid #008066;
  padding: 2% 4% 2% 4%;
  border-radius: 12px;
}
</style>
