<template>
  <div class="input">
    <span class="input_title">{{ title }}</span>
    <input class="input_content" :type="type" :value="value" :placeholder="placeholder" :readonly="readonly" />
    <span class="hasIcon" v-if="hasIcon"> </span>
    <div class="clear"></div>
  </div>
</template>

<script>
  export default {
    name:'vinput',
    props: ['title', 'type', 'value', 'placeholder', 'hasIcon', 'readonly']
  }
</script>
