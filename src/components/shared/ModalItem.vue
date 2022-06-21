<!-- <template>
  <button @click="$emit('click')" :style="btnStyles" class="btn">
    <span
    v-if="icon"
    :class="`${iconSet} ${icon}`" />
    <span
    v-if="text"
    v-text="text"/>
  </button>
</template> -->

<template>
  <div class="fog">
    <div class="modal">

      <header>
        <h1>
          <slot name="header" />
        </h1>
      </header>

      <div class="modal__body">
        <slot name="body" />
      </div>

      <footer class="modal__footer">
        <slot name="footer" />
        <button-item
      icon="pi pi-times"
      @click="$emit('cancel')"
    />
      </footer>

    </div>
  </div>
</template>

<script>

import ButtonItem from './ButtonItem'
export default {
  name: 'ModalItem',
  components: {
    ButtonItem
  }
}
</script>

<style lang="scss">
.fog {
  background-color: $blue;
  background-image: linear-gradient(19deg, $blue 0%, $violet 100%);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.modal {
  max-width: 20rem;
  padding: 20px;
  background: #fff;
  margin: auto auto;
  border-radius: 2rem;
  box-shadow: 0 0 20px 20px rgba(0,0,0,0.1);
  color: $dark-blue;

  &__body {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  &__footer {
    button {
      margin: 0.5rem;
    }
  }
}
</style>
