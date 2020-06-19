import React, { useState, Fragment } from "react";
import useGrid from "../hooks/useGrid";
import Cell from "./Cell";
import Button from "@material-ui/core/Button";
import {
  randomMaze,
  recursiveDivision,
  generateGraph,
} from "../utility/index";
import "./Board.css";
import useNodeGrid from "../hooks/useNodeGrid";

const ROWS_INIT = 20;
const COLS_INIT = 50;
const START_ROW = Math.floor(ROWS_INIT / 2);
const START_COL = Math.floor(COLS_INIT / 3);

const Board = () => {
  const { grid } = useGrid(
    ROWS_INIT,
    COLS_INIT,
    START_ROW,
    START_COL
  );
  const { nodeGrid, resetGrid } = useNodeGrid();
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMovingKeyItem, setIsMovingKeyItem] = useState([false, null]);
  const [animationComplete, setAnimationComplete] = useState(false);

  let Grid = grid.map((row, rowNum) => {
    return row.map((val, colNum) => {
      return (
        <Cell
          key={[rowNum, colNum]}
          val={val}
          node={nodeGrid[rowNum][colNum]}
          row={rowNum}
          col={colNum}
          isMouseDown={isMouseDown}
          isMovingKeyItem={isMovingKeyItem}
          setIsMovingKeyItem={setIsMovingKeyItem}
          animationComplete={animationComplete}
        />
      );
    });
  });

  const BFS = () => {
    const { startNode, graph } = generateGraph(nodeGrid);
    // graph.printGraph()
    const animations = graph.bfs(startNode);
    animate(animations);
  };

  const DFS = () => {
    const { startNode, graph } = generateGraph(nodeGrid);
    const animations = graph.dfs(startNode);
    animate(animations);
  };

  const Dijkstra = () => {
    const { startNode, graph } = generateGraph(nodeGrid);
    const animations = graph.dijkstra(startNode);
    animate(animations);
  };

  const AStar = () => {
    const { startNode, graph, targetNode } = generateGraph(nodeGrid);
    const animations = graph.aStar(startNode, targetNode);
    animate(animations);
  };
  

  const bestFirstSearch = () => {
    const { startNode, graph, targetNode } = generateGraph(nodeGrid);
    const animations = graph.bestFirstSearch(startNode, targetNode);
    animate(animations);
  };

  const clear = () => {
    setAnimationComplete(false);
    resetGrid();
  };

  const doRandomMaze = () => {
    clear();
    randomMaze(nodeGrid);
  };

  const doRecursiveDivision = () => {
    clear();
    recursiveDivision(nodeGrid);
  };


  const animate = (animations) => {
    let count = 0;

    const intervalId = setInterval(() => {
      const node = animations[count];

      node.markSearched();
      node.isTarget() && node.markShortestPath();

      count++;

      if (count >= animations.length) {
        setAnimationComplete(true);
        clearInterval(intervalId);
      }
    }, 3);
  };

  return (
    <Fragment>
      <div style={{ margin: "auto" }}>
        <Button onClick={DFS}>Do DFS</Button>
        <Button onClick={BFS}>Do BFS</Button>
        <Button onClick={Dijkstra}>Dijkstra</Button>
        <Button onClick={doRandomMaze}>Random Maze</Button>
        <Button onClick={doRecursiveDivision}>Recursive Division</Button>
        <Button onClick={AStar}>A*</Button>
        <Button onClick={bestFirstSearch}>Greedy Best First Search</Button>
        <Button onClick={clear}>Clear</Button>
      </div>
      <div
        onMouseDown={() => {
          setIsMouseDown(true);
        }}
        onMouseUp={() => {
          setIsMouseDown(false);
        }}
        className="Board"
        style={{
          gridTemplateRows: `repeat(${ROWS_INIT}, 1fr)`,
          gridTemplateColumns: `repeat(${COLS_INIT}, 1fr)`,
        }}
      >
        {Grid}
      </div>
    </Fragment>
  );
};

export default Board;
