<template>
  <div 
    class="chess-square" 
    :style="{ backgroundColor: backgroundColor }"
    @click="emit('update-selected-tile', { row: props.rowIndex, column: props.columnIndex })"
  >
    <div 
      v-if="props.columnIndex === 0" 
      class="row-index" 
      :style="{ color: textColor }"
    >
      {{ props.rowIndex + 1 }}
    </div>
    <div 
      v-if="props.rowIndex === 0" 
      class="column-index" 
      :style="{ color: textColor }"
    >
      {{ 'abcdefgh'.split('')[props.columnIndex] }}
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const emit = defineEmits(['update-selected-tile']);

  const props = defineProps({
    rowIndex: {
      type: Number,
      required: true
    },
    columnIndex: {
      type: Number,
      required: true
    },
    theme: {
      type: Object,
      required: false,
      default: () => ({
        boardWhite: '#ffffff',
        boardBlack: '#000000',
        highlight: '#FFFF8F'
      })
    },
    selectedTile: {
      type: Object,
      required: true,
    }
  });

  const backgroundColor = computed(() => {
    if (props.rowIndex === props.selectedTile.row && props.columnIndex === props.selectedTile.column) {
      return props.theme.highlight;
    }
    return (props.rowIndex + props.columnIndex) % 2 === 0 ? props.theme.boardBlack : props.theme.boardWhite;
  });

  const textColor = computed(() => {
    return (props.rowIndex + props.columnIndex) % 2 === 0 ? props.theme.boardWhite : props.theme.boardBlack;
  });
</script>

<style scoped>
  .chess-square {
    position: relative; /* Ensure the child divs are positioned relative to this square */
    height: 100%;
    width: 100%;
    cursor: pointer;
    box-sizing: border-box;
    aspect-ratio: 1 / 1;
    box-shadow: inset -0.5rem -0.5rem rgba(0, 0, 0, .2);
    border-radius: 5px;
    transition: filter 0.3s;
  }

  .chess-square:hover {
    filter: brightness(1.2);
  }

  .chess-square:active {
    filter: brightness(0.8);
  }

  .row-index, .column-index {
    position: absolute;
    padding: 2px;
    font-family: 'Roboto', sans-serif;
    font-size: 100%;
    font-weight: 800;
    border-radius: 3px;
    padding: 10px;
  }

  .row-index {
    top: 0;
    left: 0;
  }

  .column-index {
    bottom: 0;
    right: 0;
  }

  .text-white {
    color: #ffffff;
  }

  .text-black {
    color: #000000;
  }
</style>