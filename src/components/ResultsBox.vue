<template>
  <div>
    <!-- text between -->
    <p v-text="'And the result...'" />
    <flask-item
      :color="mixtureEffectFill"
      :buttons-visible="false"
      :delete-button-visible="false"
      :size="15"
      :amount="100"
      :style="flaskItemStyle"
    />

    <p>{{ mixtureEffectFill }}</p>
    <p>There are {{$store.state.colors.length}} colors in your pocket!</p>
    <button-item
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="pi pi-refresh "
      @click="$emit('refresh')"
    />
    <button-item
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="pi pi-question"
      @click="showModal"
    />
    <router-link :to="rgbLink">
      <button-item
        :size="4"
        :movement="-0.5"
        :font-size="1.5"
        icon="pi pi-share-alt"
        @click="() => {}"
      />
    </router-link>

    <button-item
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="pi pi-pencil"
      @click="saveColor"
    />
   <fade-animation-item>
      <modal-item v-if="modalVisible" @cancel="hideModal">
        <template #header> About the app </template>

        <template #body> Mix three colors to create the perfect one! </template>

        <template #footer>
          <button-item icon="pi pi-thumbs-up" />
        </template>
      </modal-item>

    </fade-animation-item>
  </div>
</template>

<script>
import FlaskItem from './shared/FlaskItem'
import ButtonItem from './shared/ButtonItem'
import ModalItem from './shared/ModalItem'
import FadeAnimationItem from './shared/FadeAnimationItem'
import modalMixin from '../mixins/ModalMixin'
import { mapMutations } from 'vuex'

export default {
  name: 'ResultsBox',
  components: {
    FlaskItem,
    ButtonItem,
    ModalItem,
    FadeAnimationItem
  },
  mixins: [modalMixin],
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  emits: ['refresh'],
  computed: {
    mixtureEffectFill () {
      const [redCol, greenCol, blueCol] = this.mixtures.map((item) =>
        Math.floor(item.amount * 2.5)
      )
      return `rgb(${redCol}, ${greenCol}, ${blueCol})`
    },
    flaskItemStyle () {
      return 'margin: 3rem auto'
    },
    rgbLink () {
      const [redCol, greenCol, blueCol] = this.mixtures.map((item) =>
        Math.floor(item.amount * 2.5)
      )
      return `/color/${redCol}/${greenCol}/${blueCol}`
    }
  },
  methods: {
    openModal () {
      this.modalVisible = true
    },
    saveColor () {
      const [red, green, blue] = this.mixtures.map((item) =>
        Math.floor(item.amount * 2.5)
      )
      this.addColor({ red, green, blue })
    },
    ...mapMutations({ addColor: 'ADD_COLOR' })
  }
}
</script>
<style scoped lang="scss">
button {
  margin: 0.5rem;
}

.slide-fade-enter-from {
  opacity: 0;
}

.slide-fade-enter-to {
  opacity: 1;
}

.slide-fade-enter-active {
  transition: opacity .5s;
}
.slide-fade-leave-from {
  opacity: 1;
}
.slide-fade-leave-to {
  opacity: 0;
}
.slide-fade-leave-active {
  transition: opacity .5s;
}
</style>
