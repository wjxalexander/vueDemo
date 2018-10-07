<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "tabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertiacal"].indexOf(value) >= 0;
      }
    }
  },
  created() {
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    this.$emit("updated:selected", this.selected);//事件发布
  }
};
</script>

<style lang="scss" scoped>
.tabs {
}
</style>
