<template>
    <div class="flask animate__animated" :class="animateClass" :style="flaskStyle" @animationend="isAnimated = false">
    <button-item
      v-if="buttonsVisible"
      class="flask__btn flask__btn--left"
      icon="pi pi-arrow-down"
      @click="$emit('decrement'); addZoomIn()"
    />

    <div :class="fillClasses" :style="fillStyle" />

    <button-item
      v-if="buttonsVisible"
      class="flask__btn flask__btn--right"
      icon="pi pi-arrow-up"
      :movement="-0.5"
      @click="$emit('increment'); addZoomIn()"
    />

     <button-item
      v-if="deleteButtonVisible"
      class="flask__btn flask__btn--center"
      icon="pi pi-times"
      :movement="0.5"
      @click="$emit('delete');"
    />
  </div>
</template>

<script>
import ButtonItem from './ButtonItem'

export default {
  name: 'FlaskItem',
  components: {
    ButtonItem
  },
  props: {
    size: {
      type: Number,
      default: 10
    },
    amount: {
      type: Number,
      default: 50
    },
    variant: {
      type: String
    },
    color: {
      type: String
    },
    buttonsVisible: {
      type: Boolean,
      default: true
    },
    deleteButtonVisible: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    isAnimated: false
  }),
  computed: {
    flaskStyle () {
      return {
        height: `${this.size}rem`,
        width: `${this.size}rem`
      }
    },
    fillClasses () {
      return ['flask__fill', this.variant && `flask__fill--${this.variant}`]
    },
    fillStyle () {
      const style = { height: this.amount + '%' }

      if (!this.variant) {
        style.backgroundColor = this.color || '#fff'
      }

      return style
    },
    animateClass () {
      return this.isAnimated ? 'animate__shakeY' : ''
    }
  },
  methods: {
    addZoomIn () {
      this.isAnimated = true
      // this.$refs.flask.classList.add('animate__animated', 'animate__shakeY')
      // setTimeout(() => { this.$refs.flask.classList.remove('animate__animated', 'animate__shakeY') }, 300)
    }
  }
}
</script>

<style lang="scss">
.flask {
  display: block;
  border: 10px solid $light-grey;
  border-radius: 50%;
  margin: 2rem 1rem;
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  box-shadow: $flask-box-shadow;

  &__fill {
    width: 100%;
    height: 100%;
    transition: 0.2s;

    &--red {
      background-color: $orange;
      background-image: linear-gradient(189deg, $orange 0%, #ff2525 74%);
    }

    &--green {
      background-color: #2e561c;
      background-image: linear-gradient(0deg, #2e561c 0%, #2af598 100%);
    }

    &--blue {
      background-color: $sea;
      background-image: linear-gradient(183deg, $sea 0%, #0070a2 100%);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $grey;
    background-image: linear-gradient(0deg, $grey 0%, $light-blue 100%);
    opacity: 0.5;
  }
  &__btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &--right {
      right: 1rem;
    }

    &--left {
      left: 1rem;
    }

    &--center {
      left: 50%;
      transform: translate(-50%,-50%);
    }

  }
}

</style>
