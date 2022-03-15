<template lang="pug">
  div.container
    input(:value="value" @input="$emit('change', $event.target.value)")
    p {{value}}
    
</template>
<script>
export default {
  name: "testModel",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: String,
  },
};
</script>
