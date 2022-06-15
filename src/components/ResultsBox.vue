<template>
  <div>
    <!-- text between -->
    <p v-text="'And the result...'" />
    <flask-item
      :color="mixtureEffectFill"
      :buttonsVisible="false"
      :size="15"
      :amount="100"
      :style="flaskItemStyle"
    />
    <button-item
      @click="$emit('refresh')"
      :size="4"
      :movement="-0.5"
      :fontSize="1.5"
      icon="pi pi-refresh "
    />
     <button-item
      @click="showModal"
      :size="4"
      :movement="-0.5"
      :fontSize="1.5"
      icon="pi pi-question"
    />
    <modal-item
  v-if="modalVisible"
  @cancel="hideModal">

   <template v-slot:header>
     About the app
   </template>

   <template v-slot:body>
     Mix three colors to create the perfect one!
   </template>

   <template v-slot:footer>
  <button-item icon="pi pi-thumbs-up"  />
   </template>

</modal-item>

  </div>
</template>

<script>
import FlaskItem from './shared/FlaskItem'
import ButtonItem from './shared/ButtonItem'
import ModalItem from './shared/ModalItem'
import modalMixin from '../mixins/ModalMixin'

export default {
  name: 'ResultsBox',
  mixins: [modalMixin],
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  methods: {
    openModal () {
      this.modalVisible = true
    }
  },
  computed: {
    mixtureEffectFill () {
      const [redCol, greenCol, blueCol] = this.mixtures.map((item) =>
        Math.floor(item.amount * 2.5)
      )
      return `rgb(${redCol}, ${greenCol}, ${blueCol})`
    },
    flaskItemStyle () {
      return 'margin: 3rem auto'
    }
  },
  components: {
    FlaskItem,
    ButtonItem,
    ModalItem
  }
}
</script>
<style scoped lang="scss">
button {
  margin: 0.5rem;
}

</style>
