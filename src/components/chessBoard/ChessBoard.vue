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
      :piece="checkSquareForPiece((i - 1) % 8, 7 - Math.floor((i - 1) / 8))"
      @update-selected-tile="handleUpdateSelectedTile"
    />
  </div>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue';
  import ChessSquare from './chessSquare/ChessSquare.vue';
  import { useBoardStateStore } from '@/stores/boardState';
  import { pieceIndexes } from "@/data/indexes";

  const boardStateStore = useBoardStateStore();

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

  const checkSquareForPiece = (targetColumnIndex, targetRowIndex) => {

    for (const [key, piece] of Object.entries(boardStateStore.white)) {
      if (!piece.isTaken && piece.currentColumnIndex === targetColumnIndex && piece.currentRowIndex === targetRowIndex) {
        return { 
          isVisible: true,
          pieceType: pieceIndexes[piece.pieceTypeIndex],
          pieceColor: "white"
        };
      }
    } 

    for (const [key, piece] of Object.entries(boardStateStore.black)) {
      if (!piece.isTaken && piece.currentColumnIndex === targetColumnIndex && piece.currentRowIndex === targetRowIndex) {
        return { 
          isVisible: true,
          pieceType: pieceIndexes[piece.pieceTypeIndex],
          pieceColor: "black"
        };
      }
    } 

    return {
      isVisible: false,
      pieceType: "",
      pieceColor: ""
    };
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
    justify-content: center;
  }
</style>