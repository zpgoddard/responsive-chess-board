<template>
  <div class="chess-board">
    <!-- Row index's values are reverse so that row "1" can be at the bottom -->
    <ChessSquare 
      v-for="i in 64"
      :key="i"
      :rowIndex="7 - Math.floor((i - 1) / 8)"
      :columnIndex="(i - 1) % 8"
      :theme="theme"
      :selectedTile="selectedTile"
      @update-selected-tile="handleUpdateSelectedTile"
    />
  </div>
</template>

<script setup>
  import ChessSquare from './chessSquare/ChessSquare.vue';
  import { defineProps, defineEmits } from 'vue';

  defineProps({
    theme: { 
      type: Object,
      required: false,
    },
    selectedTile: {
      type: Object,
      required: true,
    }
  });

  const emit = defineEmits(['update-selected-tile']);

  const handleUpdateSelectedTile = (tile) => {
    emit('update-selected-tile', tile);
  };
</script>

<style scoped>
  .chess-board {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
  }
</style>