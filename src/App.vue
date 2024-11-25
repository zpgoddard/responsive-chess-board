<template>
  <div class="wrapper">
    <div class="boardWrapper">
      <ChessBoard 
        :theme="theme"
        :selectedTile="selectedTile"
        @update-selected-tile="updateSelectedTile"
      />
    </div>
    <div class="panelWrapper">
      <GamePanel 
        :theme="theme"
        :gameHistory="gameHistory" 
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, toRaw } from 'vue';
  import ChessBoard from './components/chessBoard/ChessBoard.vue';
  import GamePanel from './components/gamePanel/GamePanel.vue';
  import { convertIndexesToTileString } from './utils';
  import { theme } from './styles/theme.ts';

  document.documentElement.style.setProperty('--background-color', theme.background);
  document.documentElement.style.setProperty('--board-border-color', theme.boardBorder);

  const gameHistory = reactive([]);
  const selectedTile = reactive({ column: null, row: null }); // Ensrues only 1 tile can be selected at a time.

  const logAction = (action) => {
    gameHistory.push(action);
    console.log('Game History:', toRaw(gameHistory));
  };

  const updateSelectedTile = (newSelectedTile) => {
    console.log(`tile selected: ${convertIndexesToTileString(newSelectedTile.row, newSelectedTile.column)}`);
    selectedTile.column = newSelectedTile.column;
    selectedTile.row = newSelectedTile.row;
    logAction(newSelectedTile);
  };
</script>

<style>

  /* GLOBAL STYLES (UNSCOPED) */
  body {
    background: var(--background-color);
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #app {
    width:80%;
  }

  /* LOCAL STYLES (SCOPED) */
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 50px;
  }

  .boardWrapper {
    border: 1rem solid var(--board-border-color);
    border-radius: 15px;
    filter: drop-shadow(0px 33px 15px #000000);
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    aspect-ratio: 1 / 1;
    max-height: 90vh;
    max-width: 90vh;
  }

  .panelWrapper {
    border-radius: 15px;
    filter: drop-shadow(0px 33px 15px #000000);
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    overflow-y: auto;
    min-width: 10rem;
    max-height: 90vh;
  }

  /* CUSTOM SCROLLBAR */

  .panelWrapper::-webkit-scrollbar {
    width: 12px;
  }

  .panelWrapper::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  .panelWrapper::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    border: 3px solid rgba(0, 0, 0, 0.2);
  }

  .panelWrapper::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  /* RESPONSIVE BREAKPOINTS */
  
  /* Desktop view */
  @media screen and (min-width: 1025px) {
    .wrapper {
      flex-direction: row;
    }
  }

  /* Tablet view */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .wrapper {
      flex-direction: column;
    }
    .boardWrapper {
      width: -webkit-fill-available;
      font-size: 75%;
    }
    .panelWrapper {
      width: 500px;
      max-height: 20vh;
    }
  }

  /* Mobile view */
  @media screen and (max-width: 767px) {
    .wrapper {
      flex-direction: column;
    }
    .boardWrapper {
      width: -webkit-fill-available;
      min-width: 200px;
      font-size: 50%;
    }
    .panelWrapper {
      width: 320px;
      height: 100px;
    }
  }

</style>