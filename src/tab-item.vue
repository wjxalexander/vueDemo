<template>
  <div class="tabs-item" @click="onClick" :class="classes" :disabled = 'disabled' :data-name ='name'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabsItem",
  data() {
    return {
      active: false
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      required: true,
      type: String || Number
    }
  },
  inject: ["eventBus"],
  created() {
    if (this.eventBus) {
      this.eventBus.$on("update:selected", name => {
        console.log(name);
        if (name === this.name) {
          this.active = true;
        } else {
          this.active = false;
        }
      });
    }
  },
  mounted() {},
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      };
    }
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      if (this.eventBus) {
        this.eventBus.$emit("update:selected", this.name, this);
      }
      this.$emit('click',this)
    }
  }
};
</script>

<style lang="scss" scoped>
$blue: blue;
.tabs-item {
  height: 100%;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0 2em;
  display: flex;
  align-items: center;
  &.active {
    color: $blue;
  }
  &.disabled {
    color: #ccc;
    cursor: not-allowed;
  }
}
</style>
