<template>
  <button @click="$emit('click')" :style="btnStyles" class="btn">
    <span
    v-if="icon"
    :class="`${iconSet} ${icon}`" />
    <span
    v-if="text"
    v-text="text"/>
  </button>
</template>

<script>
export default {
  name: 'ButtonItem',
  props: {
    icon: {
      type: String
    },
    iconSet: {
      type: String,
      default: 'fas'
    },
    text: {
      type: String
    },
    fontSize: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 2
    },
    movement: {
      type: Number,
      default: 0.5
    }
  },
  computed: {
    btnStyles () {
      return {
        width: `${this.size}rem`,
        height: `${this.size}rem`,
        fontSize: `${this.fontSize}rem`,
        '--movement': `${this.movement}rem`
      }
    }
  }
}
</script>

<style scoped lang="scss">
.btn {
  background-color: #9a9a9a;
  background-image: linear-gradient(0deg, #9a9a9a 0%, #e8fdff 100%);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 20px 40px 0 rgba(107, 154, 212, 0.1);
  transition: 0.3s;
  outline: none;
  font-size: 1.5rem;
  color: #637892;

  &:hover {
    margin-top: var(--movement);
  }
}
</style>
