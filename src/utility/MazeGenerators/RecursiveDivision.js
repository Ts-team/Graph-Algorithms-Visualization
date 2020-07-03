import { drawContourWalls } from "./Contour";

const HORIZONTAL = "horizontal";
const VERTICAL = "vertical";

export const recursiveDivision = async (grid) => {
  drawContourWalls(grid);
  const width = grid[0].length - 2; // Subtract 2 since we drew a contour
  const height = grid.length - 2;
  let prohibitedCells = [];
  divide(
    1,
    1,
    width,
    height,
    chooseOrientation(width, height),
    prohibitedCells
  );
};

const divide = (col, row, width, height, orientation, prohibited) => {
  if (width <= 2 || height <= 2) return;

  const horizontal = orientation === HORIZONTAL;

  // Where will the wall be drawn from?
  let whereCol =
    col + (horizontal ? 0 : Math.ceil(Math.random() * (width - 2))); // Rand number between the col and width

  let whereRow =
    row + (horizontal ? Math.ceil(Math.random() * (height - 2)) : 0); // Rand number between the row and height

  // Where will the passage through the wall exist?
  const passCol =
    whereCol + (horizontal ? Math.ceil(Math.random() * (width - 1)) : 0); // Rand number between the col and width
  const passRow =
    whereRow + (horizontal ? 0 : Math.ceil(Math.random() * (height - 1))); // Rand number between the row and height

  // How long will the wall be?
  const length = horizontal ? width : height;

  // Draw the walls
  drawWall(
    whereRow,
    whereCol,
    passRow,
    passCol,
    horizontal,
    length,
    prohibited
  );

  let newCol = row;
  let newRow = col;

  let newwidth = horizontal ? width : whereCol - col;
  let newheight = horizontal ? whereRow - row : height;
  divide(
    newCol,
    newRow,
    newwidth,
    newheight,
    chooseOrientation(newwidth, newheight),
    prohibited
  );

  let newCol2 = horizontal ? col : whereCol + 1;
  let newRow2 = horizontal ? whereRow + 1 : row;

  let newwidth2 = horizontal ? width : col + width - whereCol - 1;
  let newheight2 = horizontal ? row + height - whereRow - 1 : height;

  divide(
    newCol2,
    newRow2,
    newwidth2,
    newheight2,
    chooseOrientation(newwidth2, newheight2),
    prohibited
  );
};

const drawWall = (
  startRow,
  startCol,
  passRow,
  passCol,
  horizontal,
  length,
  prohibited
) => {
  for (let i = 0; i < length; i++) {
    const row = startRow + (horizontal ? 0 : i);
    const col = startCol + (horizontal ? i : 0);

    const cell = document.getElementById(`${row} ${col}`);

    if (
      cell &&
      !cell.classList.contains("Target") &&
      !cell.classList.contains("Filled") &&
      !isProhibitedCoord(row, col, prohibited)
    ) {
      cell.classList.add("Wall");
    }
  }

  const cell = document.getElementById(`${passRow} ${passCol}`);
  if (cell && !isBorder(passRow, passCol)) {
    cell.classList.remove("Wall");
  }
  updateProhibitedCells(passRow, passCol, horizontal, prohibited);
};

const chooseOrientation = (width, height) => {
  if (width < height) {
    return HORIZONTAL;
  }
  return VERTICAL;
};

const updateProhibitedCells = (row, col, horizontal, prohibited) => {
  if (!horizontal) {
    prohibited.push([row, col + 1]);
    prohibited.push([row, col - 1]);
  } else {
    prohibited.push([row + 1, col]);
    prohibited.push([row - 1, col]);
  }
};

const isProhibitedCoord = (row, col, prohibited) => {
  for (let i = 0; i < prohibited.length; i++) {
    if (prohibited[i][0] === row && prohibited[i][1] === col) return true;
  }
  return false;
};

const isBorder = (row, col) => {
  return row === 0 || row === 19 || col === 0 || col === 49;
};
