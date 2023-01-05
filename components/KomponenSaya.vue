<template>
  <div>Halo {{ text }}!</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "dunia",
    },
  },
};
</script>
