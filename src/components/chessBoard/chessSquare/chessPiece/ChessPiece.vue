<template>
  <div class="chess-piece">
    <img class="piece-image" :src="imageSrc" alt="chess piece" />
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    pieceType: {
      type: String,
      required: false,
      default: 'pawn'
    },
    pieceColor: {
      type: String,
      required: false,
    },
  });

  const imageSrc = computed(() => new URL(`../../../../assets/graphics/${props.pieceType}_${props.pieceColor}.svg`, import.meta.url).href);

</script>

<style scoped>
  .chess-piece {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .piece-image {
    height: 50%;
  }
</style>