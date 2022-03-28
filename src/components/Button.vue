<template>
  <button :class="btnClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
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
  border: none;
  border-radius: 10px;
}

.secondary {
  background-color: white;
  color: #008066;
  border: none;
  border-radius: 10px;
}

.secondary-border {
  background-color: white;
  color: #008066;
  border: 3px solid #008066; 
  border-radius: 10px;
}

.small {
  width: 80px;
  height: 35px;
}

.medium {
  width: 120px;
  height: 50px;
  font-size: 18px;
}

.img {
  height: 50px;
}

.img img {
  width: 100%;
  height: 50%;
}
</style>
