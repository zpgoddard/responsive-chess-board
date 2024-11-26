import { defineStore } from 'pinia'

export const useBoardStateStore = defineStore('boardState', {
  state: () => {
    return { 
      white: {
        aPawn: {
          isTaken: false,
          // isPromoted: boolean,
          // promotedTo: string,
          pieceTypeIndex: 0,
          currentColumnIndex: 0,
          currentRowIndex: 1,
        },
        bPawn: {
          isTaken: false,
          pieceTypeIndex: 0,
          currentColumnIndex: 1,
          currentRowIndex: 1,
        },
        cPawn: {
          isTaken: false,
          pieceTypeIndex: 0,
          currentColumnIndex: 2,
          currentRowIndex: 1,
        },
        dPawn: {
          isTaken: false,
          pieceTypeIndex: 0,
          currentColumnIndex: 3,
          currentRowIndex: 1,
        },
        ePawn: {
          isTaken: false,
          pieceTypeIndex: 0,
          currentColumnIndex: 4,
          currentRowIndex: 1,
        },
        fPawn: {
          isTaken: false,
          pieceTypeIndex: 0,
          currentColumnIndex: 5,
          currentRowIndex: 1,
        },
        gPawn: {
          isTaken: false,
          pieceTypeIndex: 0,
          currentColumnIndex: 6,
          currentRowIndex: 1,
        },
        hPawn: {
          isTaken: false,
          pieceTypeIndex: 0,
          currentColumnIndex: 7,
          currentRowIndex: 1,
        },
        aRook: {
          isTaken: false,
          pieceTypeIndex: 1,
          currentColumnIndex: 0,
          currentRowIndex: 0,
        },
        bKnight: {
          isTaken: false,
          pieceTypeIndex: 2,
          currentColumnIndex: 1,
          currentRowIndex: 0,
        },
        cBishop: {
          isTaken: false,
          pieceTypeIndex: 3,
          currentColumnIndex: 2,
          currentRowIndex: 0,
        },
        dQueen: {
          isTaken: false,
          pieceTypeIndex: 4,
          currentColumnIndex: 3,
          currentRowIndex: 0,
        },
        eKing: {
          isTaken: false,
          pieceTypeIndex: 5,
          currentColumnIndex: 4,
          currentRowIndex: 0,
        },
        fBishop: {
          isTaken: false,
          pieceTypeIndex: 3,
          currentColumnIndex: 5,
          currentRowIndex: 0,
        },
        gKnight: {
          isTaken: false,
          pieceTypeIndex: 2,
          currentColumnIndex: 6,
          currentRowIndex: 0,
        },
        hRook: {
          isTaken: false,
          pieceTypeIndex: 1,
          currentColumnIndex: 7,
          currentRowIndex: 0,
        },
      },
      black: {
        aPawn: {
          isTaken: false,
          pieceTypeIndex: 0,
          currentColumnIndex: 0,
          currentRowIndex: 6,
        },
        bPawn: {
          isTaken: false,
          pieceTypeIndex: 0,
          currentColumnIndex: 1,
          currentRowIndex: 6,
        },
        cPawn: {
          isTaken: false,
          pieceTypeIndex: 0,
          currentColumnIndex: 2,
          currentRowIndex: 6,
        },
        dPawn: {
          isTaken: false,
          pieceTypeIndex: 0,
          currentColumnIndex: 3,
          currentRowIndex: 6,
        },
        ePawn: {
          isTaken: false,
          pieceTypeIndex: 0,
          currentColumnIndex: 4,
          currentRowIndex: 6,
        },
        fPawn: {
          isTaken: false,
          pieceTypeIndex: 0,
          currentColumnIndex: 5,
          currentRowIndex: 6,
        },
        gPawn: {
          isTaken: false,
          pieceTypeIndex: 0,
          currentColumnIndex: 6,
          currentRowIndex: 6,
        },
        hPawn: {
          isTaken: false,
          pieceTypeIndex: 0,
          currentColumnIndex: 7,
          currentRowIndex: 6,
        },
        aRook: {
          isTaken: false,
          pieceTypeIndex: 1,
          currentColumnIndex: 0,
          currentRowIndex: 7,
        },
        bKnight: {
          isTaken: false,
          pieceTypeIndex: 2,
          currentColumnIndex: 1,
          currentRowIndex: 7,
        },
        cBishop: {
          isTaken: false,
          pieceTypeIndex: 3,
          currentColumnIndex: 2,
          currentRowIndex: 7,
        },
        dQueen: {
          isTaken: false,
          pieceTypeIndex: 4,
          currentColumnIndex: 3,
          currentRowIndex: 7,
        },
        eKing: {
          isTaken: false,
          pieceTypeIndex: 5,
          currentColumnIndex: 4,
          currentRowIndex: 7,
        },
        fBishop: {
          isTaken: false,
          pieceTypeIndex: 3,
          currentColumnIndex: 5,
          currentRowIndex: 7,
        },
        gKnight: {
          isTaken: false,
          pieceTypeIndex: 2,
          currentColumnIndex: 6,
          currentRowIndex: 7,
        },
        hRook: {
          isTaken: false,
          pieceTypeIndex: 1,
          currentColumnIndex: 7,
          currentRowIndex: 7,
        },
      }
    }
  },
  actions: {
    updatePiecesLocation(color, pieceKey, newColumnIndex, newRowIndex) {
      this[color][pieceKey].currentColumnIndex = newColumnIndex;
      this[color][pieceKey].currentRowIndex = newRowIndex;
    },
  },
});