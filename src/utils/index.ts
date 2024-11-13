/** Takes rowIndex and columnIndex as arguments and returns the tile they represent. */
export const convertIndexesToTileString = (rowIndex: number, columnIndex: number) => `${'abcdefgh'.split('')[columnIndex]}${rowIndex + 1}`;