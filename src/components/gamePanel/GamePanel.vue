<template>
  <div class="game-history">
    <div v-for="(move, index) in gameHistory" :key="index" class="history-item">
      <div class="turn-number" :style="{ color: theme.boardBlack }">{{ index + 1 }}</div>
      <div class="move" :style="{ color: theme.text }">{{ convertIndexesToTileString(move.row, move.column) }}</div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';
  import { convertIndexesToTileString } from "../../utils";

  const props = defineProps({
    theme: { 
      type: Object,
      required: false,
    },
    gameHistory: {
      type: Array,
      required: true,
    },
  });
</script>

<style scoped>
  .game-history {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-family: roboto;
  }

  .history-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
  }

  .turn-number {
    margin-right: 10px;
    font-weight: 800;
    font-size: 120%;
  }

  .move {
    flex-grow: 1;
  }
</style>